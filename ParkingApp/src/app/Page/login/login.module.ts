import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RouterModule, Routes } from '@angular/router';

import { FormsModule } from '@angular/forms'; // Importar FormsModule
// Importa los módulos necesarios de Angular Material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

const routes: Routes = [
  { path: '', component: LoginComponent }, //ruta para el componente login
];

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes), //configura lazy loading con routermodele.forchild
    FormsModule, // Asegúrate de agregar FormsModule aquí
    MatFormFieldModule, // Asegúrate de importar estos módulos
    MatInputModule,
    MatButtonModule
  ]
})
export class LoginModule { }
