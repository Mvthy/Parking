import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Page/login/login.component';
import { IntroComponent } from './Page/intro/intro.component';

const routes: Routes = [

  {
    path: 'login',
    component: LoginComponent
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

