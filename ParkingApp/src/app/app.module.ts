import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { MatInputModule} from '@angular/material/input';
import { MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule} from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { IntroComponent } from './Page/intro/intro.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { RegistrarComponent } from './Page/registrar/registrar.component';
import { RecuperarComponent } from './Page/recuperar/recuperar.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    RegistrarComponent,
    RecuperarComponent,
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
    MatCardModule
  ],

  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
