import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';

// Importa el módulo necesario de Angular Material
import { MatCardModule } from '@angular/material/card';

const routes: Routes = [
  { path: '', component: HomeComponent }, //ruta para el componente home
];

@NgModule({
  declarations: [HomeComponent 
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes), //configura lazy loading con routermodele.forchild
    MatCardModule // Asegúrate de importar este módulo
  ]
})
export class HomeModule { }
