import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeArrendadorComponent } from './home-arrendador.component';
import { SharedModule } from '../shared/shared.module';  // Importa SharedModule

//Líbrerías de Angular Material
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatLabel } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatListModule } from '@angular/material/list';

// Define las rutas específicas para este módulo
const routes: Routes = [
  {
    path: '',
    component: HomeArrendadorComponent // Ruta predeterminada para este módulo
  }
];

@NgModule({
  declarations: [
    HomeArrendadorComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes), // Configura lazy loading con RouterModule.forChild
    SharedModule,  // Aquí ya tienes acceso a los componentes importados de SharedModule
    MatCardModule,
    MatToolbarModule,
    MatFormField,
    MatInputModule,
    MatLabel,
    MatListModule,
    FormsModule,
    MatButtonToggleModule,
  ]
})
export class HomeArrendadorModule { }
