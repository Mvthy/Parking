import { Component } from '@angular/core';

interface Seat {
  id: string;
  status: 'available' | 'occupied' | 'selected';
}

@Component({
  selector: 'app-estacionamiento',
  templateUrl: './estacionamiento.component.html',
  styleUrls: ['./estacionamiento.component.css'],
})
export class EstacionamientoComponent {
  seats: Seat[][] = [
    [
      { id: '1A', status: 'available' },
      { id: '1B', status: 'available' },
      { id: '1C', status: 'occupied' },
      { id: '1D', status: 'available' },
    ],
    [
      { id: '2A', status: 'available' },
      { id: '2B', status: 'occupied' },
      { id: '2C', status: 'available' },
      { id: '2D', status: 'available' },
    ],
    [
      { id: '3A', status: 'available' },
      { id: '3B', status: 'occupied' },
      { id: '3C', status: 'available' },
      { id: '3D', status: 'available' },
    ],
    [
      { id: '4A', status: 'available' },
      { id: '4B', status: 'occupied' },
      { id: '4C', status: 'available' },
      { id: '2D', status: 'available' },
    ],
  ];

  selectedSeat: Seat | null = null; // Guardar el asiento seleccionado
  reservationMessage: string | null = null; // Mensaje de reserva

  toggleSeat(seat: Seat): void {
    if (seat.status === 'available') {
      if (this.selectedSeat) {
        this.selectedSeat.status = 'available'; // Revertir el estado del asiento previamente seleccionado
      }
      seat.status = 'selected';
      this.selectedSeat = seat; // Actualizar el asiento seleccionado
    } else if (seat.status === 'selected') {
      seat.status = 'available'; // Deseleccionar el asiento
      this.selectedSeat = null; // Limpiar la selección
    }
  }

  reserveSeat(): void {
    if (this.selectedSeat) {
      this.selectedSeat.status = 'occupied'; // Cambiar el estado del asiento a ocupado
      this.reservationMessage = `Estacionamiento ${this.selectedSeat.id} reservado exitosamente!`; // Mensaje de éxito
      this.selectedSeat = null; // Limpiar la selección
    }
  }
}
