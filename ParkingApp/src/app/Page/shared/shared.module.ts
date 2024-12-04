import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// Importar tus componentes comunes
import { ApiRestComponent } from '../../componentes/api-rest/api-rest.component';
import { DuenoComponent } from '../../componentes/dueno/dueno.component';
import { EstacionamientoComponent } from '../../componentes/estacionamiento/estacionamiento.component';

//Líbrerías de Angular Material
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button'; 
import { MatSelectModule } from '@angular/material/select';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatListModule } from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http';
import { QRCodeModule } from 'angularx-qrcode'; // Nueva biblioteca para generar QR
import { ZXingScannerModule } from '@zxing/ngx-scanner';

// Este import no tengo idea porque causa error
// pero parece que daña el router
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



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
    

    // Angular Material
    MatListModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule, 
    MatSelectModule, 
    MatButtonToggleModule,
    HttpClientModule,
    QRCodeModule, // Módulo para generar códigos QR
    ZXingScannerModule // Módulo para escanear códigos QR

  ],
  exports: [
    ApiRestComponent,
    DuenoComponent,
    EstacionamientoComponent,

    // Exportar módulos necesarios
    MatListModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule, 
    MatSelectModule, 
    MatButtonToggleModule,
    QRCodeModule,
    ZXingScannerModule,
    FormsModule,
  ]
})
export class SharedModule { }
