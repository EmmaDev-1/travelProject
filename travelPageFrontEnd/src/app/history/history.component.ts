import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  standalone: true,
  selector: 'app-historial',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
  imports: [CommonModule, HttpClientModule]
})
export class HistorialComponent implements OnInit {
  historial: any[] = [];
  private apiUrl = 'http://localhost/travelPageBackEnd/obtenerHistorial.php';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.obtenerHistorial();
  }

  obtenerHistorial() {
    this.getHistorial().subscribe(
      data => {
        this.historial = data;
      },
      error => {
        console.error('Error al obtener el historial:', error);
      }
    );
  }

  getHistorial(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
