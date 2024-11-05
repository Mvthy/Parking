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

  // Lista completa de marcas
  marcas = ['Toyota', 'Volkswagen', 'Ford', 'Honda', 'Nissan', 'Chevrolet', 
    'BMW', 'Mercedes-Benz', 'Hyundai', 'Audi', 'Kia', 'Lexus', 'Peugeot', 
    'Renault', 'Subaru', 'Mazda', 'Jeep', 'Dodge', 'Tesla', 'Mitsubishi', 
    'Land Rover', 'Porsche', 'Fiat', 'Volvo', 'Jaguar', 'Chrysler', 'Ram', 
    'Mini', 'Acura', 'Buick', 'Cadillac', 'Lincoln', 'Alfa Romeo', 'Maserati', 
    'Ferrari', 'Lamborghini', 'Aston Martin', 'Infiniti', 'Suzuki', 'Genesis', 
    'Seat', 'Skoda', 'Citroën', 'GMC', 'Haval', 'Mahindra', 'Bentley', 
    'Rolls-Royce', 'SsangYong', 'McLaren'];

  colores = ['Blanco', 'Negro', 'Gris', 'Plateado', 'Azul', 'Rojo', 'Verde', 'Cafe',
    'Marrón', 'Beige', 'Amarillo', 'Naranja', 'Violeta', 'Turquesa', 'Cyan', 'Rosado'];

  marcasFiltradas = this.marcas;
  coloresFiltrados = this.colores;

  filtrarMarcas() {
    this.marcasFiltradas = this.marcas.filter(marca =>
      marca.toLowerCase().startsWith(this.auto.marca.toLowerCase())
    );
  }

  filtrarColores() {
    this.coloresFiltrados = this.colores.filter(color =>
      color.toLowerCase().startsWith(this.auto.color.toLowerCase())
    );
  }

  // Método para validar la matrícula
  validarMatricula() {
    const regex = /^[a-zA-Z0-9]*$/; // Solo permite letras y números
    if (!regex.test(this.auto.matricula)) {
      // Remueve el último carácter si es inválido
      this.auto.matricula = this.auto.matricula.slice(0, -1);
    }
  }

  guardar() {
    console.log('Datos guardados:', this.auto);
    // Aquí puedes agregar la lógica para guardar los datos, como enviar a un servicio
  }
}
