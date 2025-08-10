import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './pages/login/login';
import { DashboardComponent } from './pages/dashboard-component/dashboard-component';
import { PerfilComponent } from './pages/perfil-component/perfil-component';
import { PersonaComponent } from './pages/persona-component/persona-component';
import { MascotaComponent } from './pages/mascota-component/mascota-component';
import { AdopcionComponent } from './pages/adopcion-component/adopcion-component';

import { AuthGuard } from './core/guards/auth-guard';

const routes: Routes = [
  { path: '', component: LoginComponent },
  // { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'persona', component: PersonaComponent },
  { path: 'mascota', component: MascotaComponent },
  { path: 'adopcion', component: AdopcionComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
