import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Page/login/login.component';
import { IntroComponent } from './Page/intro/intro.component';
import { HomeComponent } from './Page/home/home.component';
import { RegistrarComponent } from './Page/registrar/registrar.component';
import { RecuperarComponent } from './Page/recuperar/recuperar.component';

const routes: Routes = [

  {
    path: 'login', //Ruta login
    component: LoginComponent
  },

  {
    path: 'home', //Ruta home
    component: HomeComponent
  },

  {
    path: 'registrar', //Ruta registrar usuario
    component: RegistrarComponent
  },

  {
    path: 'recuperar', //Ruta recuperar contraseña
    component: RecuperarComponent
  },

  {
    path: 'intro', //Ruta intro
    component: IntroComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

