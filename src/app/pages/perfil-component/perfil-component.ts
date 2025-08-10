import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Perfil {
  id?: number;
  nombre: string;
}

@Component({
  selector: 'app-perfil-component',
  standalone: false,
  templateUrl: './perfil-component.html',
  styleUrl: './perfil-component.css'
})
export class PerfilComponent implements OnInit {
  perfiles: Perfil[] = [];
  perfil: Perfil = { nombre: '' };

  apiUrl = 'http://localhost:3000/api/roles';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getPerfiles();
  }

  getPerfiles() {
    this.http.get<Perfil[]>(this.apiUrl).subscribe(data => this.perfiles = data);
  }

  savePerfil() {
    if (this.perfil.id) {
      this.updatePerfil();
    } else {
      this.http.post(this.apiUrl, this.perfil).subscribe(() => {
        this.getPerfiles();
        this.perfil = { nombre: '' };
      });
    }
  }

  editPerfil(perfil: Perfil) {
    this.perfil = { ...perfil };
  }

  updatePerfil() {
    this.http.put(`${this.apiUrl}/${this.perfil.id}`, this.perfil).subscribe(() => {
      this.getPerfiles();
      this.perfil = { nombre: '' };
    });
  }

  deletePerfil(id: number) {
    this.http.delete(`${this.apiUrl}/${id}`).subscribe(() => this.getPerfiles());
  }
}
