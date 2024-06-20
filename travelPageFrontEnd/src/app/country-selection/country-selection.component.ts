import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'; // Importar Router
import { HttpClientModule } from '@angular/common/http';

@Component({
  standalone: true,
  selector: 'app-country-selection',
  templateUrl: './country-selection.component.html',
  styleUrls: ['./country-selection.component.css'],
  imports: [CommonModule, FormsModule] 
})
export class CountrySelectionComponent {
goBack() {
throw new Error('Method not implemented.');
}



  countries: string[] = ['Inglaterra', 'Japón', 'India', 'Dinamarca'];
  cities: string[] = [];
  selectedCountry: string = '';
  selectedCity: string = '';

  constructor(private router: Router) {}

  goToHistorial() {
    this.router.navigate(['/history']);
  }
  

  onCountryChange() {
    console.log('País seleccionado:', this.selectedCountry); // Para depuración
    switch (this.selectedCountry) {
      case 'Inglaterra':
        this.cities = ['Londres', 'Manchester'];
        break;
      case 'Japón':
        this.cities = ['Tokio', 'Osaka'];
        break;
      case 'India':
        this.cities = ['Agra', 'Bombay'];
        break;
      case 'Dinamarca':
        this.cities = ['Copenhague', 'Aarhus'];
        break;
      default:
        this.cities = [];
    }
    this.selectedCity = ''; // Limpiar la selección de ciudad cuando el país cambia
  }

  goToNext() {
    if (this.selectedCity) {
      console.log('Ciudad seleccionada:', this.selectedCity); // Para depuración
      this.router.navigate(['/budget-input'], {
        state: {
          selectedCountry: this.selectedCountry,
          selectedCity: this.selectedCity
        }
      }); // Navegar a la pantalla de presupuesto y pasar datos
    } else {
      console.log('No se ha seleccionado ninguna ciudad'); // Para depuración
    }
  }
}
