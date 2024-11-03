import { Component } from '@angular/core';

interface Auto {
  dueno: string;
  marca: string;
  modelo: string;
  anio: number;
  color: string;
  matricula: string;
}

@Component({
  selector: 'app-ficha-auto',
  templateUrl: './ficha-auto.component.html',
  styleUrls: ['./ficha-auto.component.css']
})
export class FichaAutoComponent {
  auto: Auto = {
    dueno: '',
    marca: '',
    modelo: '',
    anio: new Date().getFullYear(),
    color: '',
    matricula: ''
  };

  guardar() {
    console.log('Datos guardados:', this.auto);
    // Aquí puedes agregar la lógica para guardar los datos, como enviar a un servicio
  }
}
