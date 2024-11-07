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
      { id: '4D', status: 'available' },
    ],
  ];

  selectedSeat: Seat | null = null;
  reservationMessage: string | null = null;
  qrData: string = '';

  toggleSeat(seat: Seat): void {
    if (seat.status === 'available') {
      if (this.selectedSeat) {
        this.selectedSeat.status = 'available';
      }
      seat.status = 'selected';
      this.selectedSeat = seat;
    } else if (seat.status === 'selected') {
      seat.status = 'available';
      this.selectedSeat = null;
    }
  }

  reserveSeat(): void {
    if (this.selectedSeat) {
      this.selectedSeat.status = 'occupied';
      this.reservationMessage = `Estacionamiento ${this.selectedSeat.id} reservado exitosamente!`;
      this.qrData = `Reservado: Estacionamiento ${this.selectedSeat.id}`;
      this.selectedSeat = null;
    }
  }
}
