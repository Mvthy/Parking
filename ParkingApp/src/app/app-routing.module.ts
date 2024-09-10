import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Page/login/login.component';
import { IntroComponent } from './Page/intro/intro.component';
import { HomeComponent } from './Page/home/home.component';
import { RegistrarComponent } from './Page/registrar/registrar.component';

const routes: Routes = [

  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: 'home',
    component: HomeComponent
  },

  {
    path: 'registrar',
    component: RegistrarComponent
  },

  {
    path: 'intro',
    component: IntroComponent
  }


];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

