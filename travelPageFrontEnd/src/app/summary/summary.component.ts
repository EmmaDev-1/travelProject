import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { forkJoin, tap } from 'rxjs'; // Importar forkJoin para combinar múltiples observables

@Component({
  standalone: true,
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css'],
  imports: [CommonModule, FormsModule, HttpClientModule]
})
export class SummaryComponent implements OnInit {
  selectedCountry: string = '';
  selectedCity: string = '';
  budget: number = 0;
  weather: number | null = null;
  localCurrency: string = '';
  currencySymbol: string = '';
  exchangeRate: number = 0;
  convertedBudget: number = 0;
  historial: any[] = [];

  private apiUrl = 'http://localhost/travelPageBackEnd/guardarConsulta.php';

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit() {
    this.selectedCountry = history.state.selectedCountry || '';
    this.selectedCity = history.state.selectedCity || '';
    this.budget = history.state.budget || 0;

    // Usar forkJoin para ejecutar getWeather() y getExchangeRate() y luego llamar a saveConsulta()
    forkJoin([this.getWeather(), this.getExchangeRate()]).subscribe(
      () => {
        this.saveConsulta(); // Llamar a saveConsulta() después de que ambas solicitudes hayan completado
      },
      error => {
        console.error('Error en las solicitudes:', error);
      }
    );

  }

  goToHistorial() {
    this.router.navigate(['/history']);
  }
  

  getWeather() {
    const apiKey = 'b554453b19ba054f7b297add085cf535'; // Tu clave de API de OpenWeatherMap
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${this.selectedCity}&appid=${apiKey}&units=metric`;

    // Devolver un observable que se puede combinar con forkJoin
    return this.http.get(weatherUrl).pipe(
      tap((data: any) => {
        this.weather = data.main.temp; // Obtener la temperatura
        console.log('Clima:', data); // Para depuración
      })
    );
  }

  getExchangeRate() {
    const exchangeRateUrl = 'https://v6.exchangerate-api.com/v6/ad14328be8d20adc26e6169f/latest/COP';

    // Devolver un observable que se puede combinar con forkJoin
    return this.http.get(exchangeRateUrl).pipe(
      tap((data: any) => {
        const rates = data.conversion_rates;
        const countryCurrency = this.getCurrencyForCountry(this.selectedCountry);
        this.localCurrency = countryCurrency.currency;
        this.currencySymbol = countryCurrency.symbol;
        this.exchangeRate = rates[countryCurrency.currency];

        if (this.exchangeRate) {
          this.convertedBudget = this.budget * this.exchangeRate;
        }
        console.log('Tasa de cambio:', data); // Para depuración
      })
    );
  }

  getCurrencyForCountry(country: string) {
    const currencyMap: { [key: string]: { currency: string, symbol: string } } = {
      'Inglaterra': { currency: 'GBP', symbol: '£' },
      'Japón': { currency: 'JPY', symbol: '¥' },
      'India': { currency: 'INR', symbol: '₹' },
      'Dinamarca': { currency: 'DKK', symbol: 'kr' }
    };
    return currencyMap[country] || { currency: 'USD', symbol: '$' };
  }

  restart() {
    this.router.navigate(['/country-selection'], { replaceUrl: true });
  }

  saveConsulta() {
    const consulta = {
      pais: this.selectedCountry,
      ciudad: this.selectedCity,
      presupuesto: this.budget,
      clima: this.weather,
      moneda_local: this.localCurrency,
      simbolo_moneda: this.currencySymbol,
      presupuesto_convertido: this.convertedBudget,
      tasa_cambio: this.exchangeRate
    };

    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.http.post<any>(this.apiUrl, consulta, { headers }).subscribe(
      response => {
        console.log('Consulta guardada:', response);
      },
      error => {
        console.error('Error al guardar la consulta:', error);
      }
    );
  }
}
