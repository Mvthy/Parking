import { Component } from '@angular/core';

@Component({
  selector: 'app-dueno',
  templateUrl: './dueno.component.html',
  styleUrls: ['./dueno.component.css']
})
export class DuenoComponent {
  duenos = [
    { estacionamiento: 'A1', nombre: 'Juan Pérez', correo: 'juanperez@email.com', valor: 10, disponibilidad: 'No reservado' },
    { estacionamiento: 'A2', nombre: 'Juan Pérez', correo: 'juanperez@email.com', valor: 10, disponibilidad: 'No reservado' },
    { estacionamiento: 'A3', nombre: 'Juan Pérez', correo: 'juanperez@email.com', valor: 10, disponibilidad: 'Reservado' },
    { estacionamiento: 'A4', nombre: 'Juan Pérez', correo: 'juanperez@email.com', valor: 10, disponibilidad: 'No reservado' },
    { estacionamiento: 'B1', nombre: 'María López', correo: 'marialopez@email.com', valor: 15, disponibilidad: 'No reservado' },
    { estacionamiento: 'B2', nombre: 'María López', correo: 'marialopez@email.com', valor: 15, disponibilidad: 'Reservado' },
    { estacionamiento: 'B3', nombre: 'María López', correo: 'marialopez@email.com', valor: 15, disponibilidad: 'No reservado' },
    { estacionamiento: 'B4', nombre: 'María López', correo: 'marialopez@email.com', valor: 15, disponibilidad: 'No reservado' },
    { estacionamiento: 'C1', nombre: 'Carlos Ruiz', correo: 'carlosruiz@email.com', valor: 12, disponibilidad: 'No reservado' },
    { estacionamiento: 'C2', nombre: 'Carlos Ruiz', correo: 'carlosruiz@email.com', valor: 12, disponibilidad: 'Reservado' },
    { estacionamiento: 'C3', nombre: 'Carlos Ruiz', correo: 'carlosruiz@email.com', valor: 12, disponibilidad: 'No reservado' },
    { estacionamiento: 'C4', nombre: 'Carlos Ruiz', correo: 'carlosruiz@email.com', valor: 12, disponibilidad: 'No reservado' },
    { estacionamiento: 'D1', nombre: 'Ana Torres', correo: 'anatorres@email.com', valor: 18, disponibilidad: 'No reservado' },
    { estacionamiento: 'D2', nombre: 'Ana Torres', correo: 'anatorres@email.com', valor: 18, disponibilidad: 'Reservado' },
    { estacionamiento: 'D3', nombre: 'Ana Torres', correo: 'anatorres@email.com', valor: 18, disponibilidad: 'No reservado' },
    { estacionamiento: 'D4', nombre: 'Ana Torres', correo: 'anatorres@email.com', valor: 18, disponibilidad: 'No reservado' }
  ];
}
