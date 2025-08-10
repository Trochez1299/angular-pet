import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MascotaService {
  private apiUrl = 'http://localhost:3000/api/mascotas';

  constructor(private http: HttpClient) { }

  getMascotas() {
    return this.http.get(this.apiUrl);
  }

  createMascota(mascota: any) {
    return this.http.post(this.apiUrl, mascota);
  }

  updateMascota(id: number, mascota: any) {
    return this.http.put(`${this.apiUrl}/${id}`, mascota);
  }

  deleteMascota(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
