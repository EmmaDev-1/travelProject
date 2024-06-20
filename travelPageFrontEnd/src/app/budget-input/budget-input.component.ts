import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  standalone: true,
  selector: 'app-budget-input',
  templateUrl: './budget-input.component.html',
  styleUrls: ['./budget-input.component.css'],
  imports: [CommonModule, FormsModule]
})
export class BudgetInputComponent implements OnInit {
  selectedCountry: string = '';
  selectedCity: string = '';
  budget: number = 0;
  historial: any[] = [];

  constructor(private router: Router) {} // Inyectar Router

  ngOnInit() {
    // Recuperar datos del estado del navegador
    this.selectedCountry = history.state.selectedCountry || '';
    this.selectedCity = history.state.selectedCity || '';
  }

  goToHistorial() {
    this.router.navigate(['/history']);
  }


  goToNext() {
    if (this.budget > 0) { // Solo navega si el presupuesto es mayor a 0
      console.log('Presupuesto ingresado:', this.budget); // Para depuración
      this.router.navigate(['/summary'], {
        state: {
          selectedCountry: this.selectedCountry,
          selectedCity: this.selectedCity,
          budget: this.budget
        }
      }); // Navegar a la pantalla de resumen y pasar datos
    } else {
      console.log('Presupuesto debe ser mayor a 0'); // Mensaje de depuración
    }
  }

  goBack() {
    console.log('Volver a la pantalla anterior'); // Para depuración
    this.router.navigate(['/country-selection']); // Navegar a la pantalla anterior
  }
}
