import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { IntroComponent } from './Page/intro/intro.component';
import { RegistrarComponent } from './Page/registrar/registrar.component';
import { RecuperarComponent } from './Page/recuperar/recuperar.component';

import { MatCardModule } from '@angular/material/card';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment';

// Importa un servicio personalizado para CRUD en Firebase
import { CrudFirebaseService } from './servicios/crudfirebase.service';

// Importar Authentication de Firebase
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { Pagina404Component } from './Page/pagina404/pagina404.component';
import { Pagina404Module } from './Page/pagina404/pagina404.module';

import { HttpClientModule } from '@angular/common/http';
import { QRCodeModule } from 'angularx-qrcode'; // Módulo para generar códigos QR
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { HomeArrendadorModule } from './Page/home-arrendador/home-arrendador.module';
import { HomeDuenoModule } from './Page/home-dueno/home-dueno.module';



@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    RegistrarComponent,
    RecuperarComponent,
    Pagina404Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatNativeDateModule,
    MatDatepickerModule,
    BrowserAnimationsModule,
    MatCardModule,
    AngularFireModule.initializeApp(environment.firebaseConfig), //Iniciar firebase con la configuración del entorno
    AngularFireAuthModule, 
    Pagina404Module,
    HttpClientModule,
    QRCodeModule,
    ZXingScannerModule,
    HomeArrendadorModule, // Agregado HomeArrendadorModule
    HomeDuenoModule // Agregado HomeDuenoModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    CrudFirebaseService // Proveedor del servicio CRUD para Firebase
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
