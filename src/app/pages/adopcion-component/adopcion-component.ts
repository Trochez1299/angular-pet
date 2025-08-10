import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Adopcion {
  id?: number;
  mascota_id: number;
  persona_id: number;
  fecha_visita: string;
  fecha_adopcion: string;
  estado: string;
}

@Component({
  selector: 'app-adopcion-component',
  standalone: false,
  templateUrl: './adopcion-component.html',
  styleUrl: './adopcion-component.css'
})
export class AdopcionComponent implements OnInit {
  adopciones: Adopcion[] = [];
  adopcion: Adopcion = {
    mascota_id: 0,
    persona_id: 0,
    fecha_visita: '',
    fecha_adopcion: '',
    estado: 'Interesado'
  };

  apiUrl = 'http://localhost:3000/api/adopciones';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getAdopciones();
  }

  getAdopciones() {
    this.http.get<Adopcion[]>(this.apiUrl).subscribe(data => this.adopciones = data);
  }

  saveAdopcion() {
    if (this.adopcion.id) {
      this.updateAdopcion();
    } else {
      this.http.post(this.apiUrl, this.adopcion).subscribe(() => {
        this.getAdopciones();
        this.resetAdopcion();
      });
    }
  }

  editAdopcion(adopcion: Adopcion) {
    this.adopcion = { ...adopcion };
  }

  updateAdopcion() {
    this.http.put(`${this.apiUrl}/${this.adopcion.id}`, this.adopcion).subscribe(() => {
      this.getAdopciones();
      this.resetAdopcion();
    });
  }

  deleteAdopcion(id: number) {
    this.http.delete(`${this.apiUrl}/${id}`).subscribe(() => this.getAdopciones());
  }

  resetAdopcion() {
    this.adopcion = {
      mascota_id: 0,
      persona_id: 0,
      fecha_visita: '',
      fecha_adopcion: '',
      estado: 'Interesado'
    };
  }
}
