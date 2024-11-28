import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';


// Importar tus componentes comunes
import { ApiRestComponent } from '../../componentes/api-rest/api-rest.component';
import { DuenoComponent } from '../../componentes/dueno/dueno.component';
import { EstacionamientoComponent } from '../../componentes/estacionamiento/estacionamiento.component';

//Líbrerías de Angular Material
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatListModule } from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http';
import { QRCodeModule } from 'angularx-qrcode'; // Nueva biblioteca para generar QR
import { ZXingScannerModule } from '@zxing/ngx-scanner';

@NgModule({
  declarations: [
    ApiRestComponent,
    DuenoComponent,
    EstacionamientoComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,

    MatListModule,
    MatCardModule,
    MatToolbarModule,
    MatFormFieldModule, 
    MatInputModule,
    MatButtonToggleModule,
    HttpClientModule,
    QRCodeModule, // Módulo para generar códigos QR
    ZXingScannerModule // Módulo para escanear códigos QR

  ],
  exports: [
    ApiRestComponent,
    DuenoComponent,
    EstacionamientoComponent,
  ]
})
export class SharedModule { }
