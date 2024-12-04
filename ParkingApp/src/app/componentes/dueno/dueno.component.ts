import { Component } from '@angular/core';

@Component({
  selector: 'app-dueno',
  templateUrl: './dueno.component.html',
  styleUrls: ['./dueno.component.css']
})
export class DuenoComponent {
  duenos = [
    { estacionamiento: 'A1', nombre: 'Juan Pérez', valor: 10000, disponibilidad: 'No reservado' },
    { estacionamiento: 'A2', nombre: 'María López', valor: 10000, disponibilidad: 'No reservado' },
    { estacionamiento: 'A3', nombre: 'Carlos Ruiz', valor: 10000, disponibilidad: 'Reservado' },
    { estacionamiento: 'A4', nombre: 'Ana Torres', valor: 10000, disponibilidad: 'No reservado' },
    { estacionamiento: 'B1', nombre: 'Pedro Martínez', valor: 15000, disponibilidad: 'No reservado' },
    { estacionamiento: 'B2', nombre: 'Laura García', valor: 15000, disponibilidad: 'Reservado' },
    { estacionamiento: 'B3', nombre: 'Sofía Fernández', valor: 15000, disponibilidad: 'No reservado' },
    { estacionamiento: 'B4', nombre: 'Luis González', valor: 15000, disponibilidad: 'No reservado' },
    { estacionamiento: 'C1', nombre: 'Elena Romero', valor: 12000, disponibilidad: 'No reservado' },
    { estacionamiento: 'C2', nombre: 'Andrés Díaz', valor: 12000, disponibilidad: 'Reservado' },
    { estacionamiento: 'C3', nombre: 'Patricia Flores', valor: 12000, disponibilidad: 'No reservado' },
    { estacionamiento: 'C4', nombre: 'José Sánchez', valor: 12000, disponibilidad: 'No reservado' },
    { estacionamiento: 'D1', nombre: 'Marta Núñez', valor: 18000, disponibilidad: 'No reservado' },
    { estacionamiento: 'D2', nombre: 'Diego Castro', valor: 18000, disponibilidad: 'Reservado' },
    { estacionamiento: 'D3', nombre: 'Valeria Mora', valor: 18000, disponibilidad: 'No reservado' },
    { estacionamiento: 'D4', nombre: 'Fernando Vázquez', valor: 18000, disponibilidad: 'No reservado' }
  ];
  
}  
