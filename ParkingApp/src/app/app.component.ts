import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ParkingApp';
  constructor(public router: Router) {
    this.initializeApp();
  }
  initializeApp() {
    this.router.navigateByUrl('intro')
  };
}
