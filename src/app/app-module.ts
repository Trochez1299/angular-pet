import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { LoginComponent } from './pages/login/login';
import { DashboardComponent } from './pages/dashboard-component/dashboard-component';
import { PerfilComponent } from './pages/perfil-component/perfil-component';
import { PersonaComponent } from './pages/persona-component/persona-component';
import { MascotaComponent } from './pages/mascota-component/mascota-component';
import { AdopcionComponent } from './pages/adopcion-component/adopcion-component';

@NgModule({
  declarations: [
    App,
    LoginComponent,
    DashboardComponent,
    PerfilComponent,
    PersonaComponent,
    MascotaComponent,
    AdopcionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [App]
})
export class AppModule { }
