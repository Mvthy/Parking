import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms'; // Asegúrate de que esta línea esté aquí

//Líbrerías de Angular Material
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatLabel } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatListModule } from '@angular/material/list';

//Importar componentes que usas en el home.component.html
import { MisDatosComponent } from '../../componentes/mis-datos/mis-datos.component';
import { UsuariosfirebaseComponent } from '../../componentes/usuariosfirebase/usuariosfirebase.component';
import { ApiRestComponent } from '../../componentes/api-rest/api-rest.component';
import { DuenoComponent } from '../../componentes/dueno/dueno.component';
import { FichaAutoComponent } from '../../componentes/ficha-auto/ficha-auto.component';
import { EstacionamientoComponent } from '../../componentes/estacionamiento/estacionamiento.component';

import { HttpClientModule } from '@angular/common/http';

import { QRCodeModule } from 'angularx-qrcode'; // Nueva biblioteca para generar QR
import { ZXingScannerModule } from '@zxing/ngx-scanner';

const routes: Routes = [
  { path: '', component: HomeComponent }, //ruta para el componente home
];

@NgModule({
  declarations: [HomeComponent,
    MisDatosComponent,
    UsuariosfirebaseComponent,
    ApiRestComponent,
    DuenoComponent,
    FichaAutoComponent,
    EstacionamientoComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes), // Configura lazy loading con RouterModule.forChild
    MatCardModule,
    MatToolbarModule,
    MatFormField,
    MatInputModule,
    MatLabel,
    MatListModule,
    FormsModule,
    MatButtonToggleModule,
    ReactiveFormsModule,
    HttpClientModule,
    QRCodeModule, // Módulo para generar códigos QR
    ZXingScannerModule // Módulo para escanear códigos QR
  ]
})
export class HomeModule { }
