import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Persona {
  id?: number;
  nombre: string;
  contacto: string;
  email: string;
  preferencia_raza: string;
  preferencia_tamano: string;
  estado: string;
  rol_id: number;
}

@Component({
  selector: 'app-persona-component',
  standalone: false,
  templateUrl: './persona-component.html',
  styleUrl: './persona-component.css'
})
export class PersonaComponent implements OnInit {
  personas: Persona[] = [];
  persona: Persona = {
    nombre: '',
    contacto: '',
    email: '',
    preferencia_raza: '',
    preferencia_tamano: 'Pequeño',
    estado: 'Activo',
    rol_id: 2
  };

  apiUrl = 'http://localhost:3000/api/personas';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getPersonas();
  }

  getPersonas() {
    this.http.get<Persona[]>(this.apiUrl).subscribe(data => this.personas = data);
  }

  savePersona() {
    console.log(this.persona);
    this.http.post(this.apiUrl, this.persona).subscribe(() => {
      this.getPersonas();
      this.persona = {
        nombre: '',
        contacto: '',
        email: '',
        preferencia_raza: '',
        preferencia_tamano: 'Pequeño',
        estado: 'Activo',
        rol_id: 2
      };
    });
  }

  deletePersona(id: number) {
    this.http.delete(`${this.apiUrl}/${id}`).subscribe(() => this.getPersonas());
  }

  updatePersona(id: number) {
    this.http.delete(`${this.apiUrl}/${id}`).subscribe(() => this.getPersonas());
  }

}
