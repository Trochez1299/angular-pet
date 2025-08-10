import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth-service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  onLogin(): void {
    if (!this.email || !this.password) {
      alert('Por favor ingrese su correo y contraseña.');
      return;
    }

    // this.authService.login(this.email, this.password).subscribe({
    //   next: (res) => {
    //     console.log('Inicio de sesión exitoso', res);
    //     this.router.navigate(['/dashboard']);
    //   },
    //   error: (err) => {
    //     console.error(err);
    //     alert('Credenciales incorrectas.');
    //   }
    // });
    console.log('Inicio de sesión exitoso');
    this.router.navigate(['/dashboard']);
    console.log("Fin");
  }
}
