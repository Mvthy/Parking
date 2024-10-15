import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroComponent } from './Page/intro/intro.component';

//Importar guard
import { AuthGuard } from './guard/auth.guard';

import { RegistrarComponent } from './Page/registrar/registrar.component';
import { RecuperarComponent } from './Page/recuperar/recuperar.component';

const routes: Routes = [

  {
    path: 'login', //Ruta login
    loadChildren: () => import('./Page/login/login.module').then(m => m.LoginModule) // lazy loading del modulo login
  },

  {
    path: 'home', //Ruta home
    loadChildren: () => import('./Page/home/home.module').then(m => m.HomeModule), // lazy loading del modulo home
    canActivate: [AuthGuard] //Protege la ruta Home
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

