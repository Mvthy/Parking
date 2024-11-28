import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Importar guard
import { AuthGuard } from './guard/auth.guard';

import { IntroComponent } from './Page/intro/intro.component';
import { RegistrarComponent } from './Page/registrar/registrar.component';
import { RecuperarComponent } from './Page/recuperar/recuperar.component';
import { Pagina404Component } from './Page/pagina404/pagina404.component';


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

  { path: 'home/arrendador',
    loadChildren: () => import('./Page/home-arrendador/home-arrendador.module').then(m => m.HomeArrendadorModule),
    canActivate: [AuthGuard] 
  },

  { path: 'home/dueno',
    loadChildren: () => import('./Page/home-dueno/home-dueno.module').then(m => m.HomeDuenoModule),
    canActivate: [AuthGuard] },

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
  },

  {
    path: 'pagina404', //ruta pagina404
    loadChildren: () => import('./Page/pagina404/pagina404.module').then(m => m.Pagina404Module) // Lazy loading del módulo Pagina404
  },

  {
    path: '**',
    component: Pagina404Component
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

