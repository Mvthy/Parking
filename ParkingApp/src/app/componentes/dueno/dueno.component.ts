import { Component } from '@angular/core';

@Component({
  selector: 'app-dueno',
  templateUrl: './dueno.component.html',
  styleUrls: ['./dueno.component.css']
})
export class DuenoComponent {
  duenos = [
    { estacionamiento: 'A1', nombre: 'Juan Pérez', correo: 'juan.perez@email.com', valor: 10000, disponibilidad: 'No reservado' },
    { estacionamiento: 'A2', nombre: 'María López', correo: 'maria.lopez@correo.com', valor: 10000, disponibilidad: 'No reservado' },
    { estacionamiento: 'A3', nombre: 'Carlos Ruiz', correo: 'carlos.ruiz@example.com', valor: 10000, disponibilidad: 'Reservado' },
    { estacionamiento: 'A4', nombre: 'Ana Torres', correo: 'ana.torres@mail.com', valor: 10000, disponibilidad: 'No reservado' },
    { estacionamiento: 'B1', nombre: 'Pedro Martínez', correo: 'pedro.martinez@email.com', valor: 15000, disponibilidad: 'No reservado' },
    { estacionamiento: 'B2', nombre: 'Laura García', correo: 'laura.garcia@correo.com', valor: 15000, disponibilidad: 'Reservado' },
    { estacionamiento: 'B3', nombre: 'Sofía Fernández', correo: 'sofia.fernandez@example.com', valor: 15000, disponibilidad: 'No reservado' },
    { estacionamiento: 'B4', nombre: 'Luis González', correo: 'luis.gonzalez@mail.com', valor: 15000, disponibilidad: 'No reservado' },
    { estacionamiento: 'C1', nombre: 'Elena Romero', correo: 'elena.romero@email.com', valor: 12000, disponibilidad: 'No reservado' },
    { estacionamiento: 'C2', nombre: 'Andrés Díaz', correo: 'andres.diaz@correo.com', valor: 12000, disponibilidad: 'Reservado' },
    { estacionamiento: 'C3', nombre: 'Patricia Flores', correo: 'patricia.flores@example.com', valor: 12000, disponibilidad: 'No reservado' },
    { estacionamiento: 'C4', nombre: 'José Sánchez', correo: 'jose.sanchez@mail.com', valor: 12000, disponibilidad: 'No reservado' },
    { estacionamiento: 'D1', nombre: 'Marta Núñez', correo: 'marta.nunez@email.com', valor: 18000, disponibilidad: 'No reservado' },
    { estacionamiento: 'D2', nombre: 'Diego Castro', correo: 'diego.castro@correo.com', valor: 18000, disponibilidad: 'Reservado' },
    { estacionamiento: 'D3', nombre: 'Valeria Mora', correo: 'valeria.mora@example.com', valor: 18000, disponibilidad: 'No reservado' },
    { estacionamiento: 'D4', nombre: 'Fernando Vázquez', correo: 'fernando.vazquez@mail.com', valor: 18000, disponibilidad: 'No reservado' }
  ];
  
}  
