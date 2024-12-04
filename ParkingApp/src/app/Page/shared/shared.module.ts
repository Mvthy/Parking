import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// Importar tus componentes comunes
import { ApiRestComponent } from '../../componentes/api-rest/api-rest.component';
import { DuenoComponent } from '../../componentes/dueno/dueno.component';
import { EstacionamientoComponent } from '../../componentes/estacionamiento/estacionamiento.component';

// Librerías de Angular Material
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button'; 
import { MatSelectModule } from '@angular/material/select';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatListModule } from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http';
import { QRCodeModule } from 'angularx-qrcode'; // Nueva biblioteca para generar QR
import { ZXingScannerModule } from '@zxing/ngx-scanner';

// Importar el módulo para animaciones
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
    BrowserAnimationsModule,  // Asegúrate de agregar esto para las animaciones

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
    BrowserAnimationsModule // También exportado si otros módulos lo requieren
  ]
})
export class SharedModule { }
