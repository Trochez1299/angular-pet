import { Component, OnInit } from '@angular/core';
import { MascotaService } from '../../core/services/mascota-service';

interface Mascota {
  id?: number;
  nombre: string;
  edad: number;
  raza: string;
  tamano: string;
  estado_salud: string;
  estado_adopcion: string;
}

@Component({
  selector: 'app-mascota-component',
  standalone: false,
  templateUrl: './mascota-component.html',
  styleUrl: './mascota-component.css'
})
export class MascotaComponent implements OnInit {
  mascotas: Mascota[] = [];
  mascota: Mascota = {
    nombre: '',
    edad: 0,
    raza: '',
    tamano: 'Pequeño',
    estado_salud: '',
    estado_adopcion: 'Disponible'
  };

  constructor(private mascotaService: MascotaService) { }

  ngOnInit(): void {
    this.getMascotas();
  }

  getMascotas() {
    this.mascotaService.getMascotas().subscribe((data: any) => this.mascotas = data);
  }

  saveMascota() {
    this.mascotaService.createMascota(this.mascota).subscribe(() => {
      this.getMascotas();
      this.resetForm();
    });
  }

  updateMascota() {
    if (!this.mascota.id) return;
    this.mascotaService.updateMascota(this.mascota.id, this.mascota).subscribe(() => {
      this.getMascotas();
      this.resetForm();
    });
  }

  deleteMascota(id: number) {
    this.mascotaService.deleteMascota(id).subscribe(() => this.getMascotas());
  }

  editMascota(m: Mascota) {
    this.mascota = { ...m };
  }

  resetForm() {
    this.mascota = {
      nombre: '',
      edad: 0,
      raza: '',
      tamano: 'Pequeño',
      estado_salud: '',
      estado_adopcion: 'Disponible'
    };
  }
}
