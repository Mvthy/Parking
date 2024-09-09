import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.css'
})
export class IntroComponent {
  constructor(public router: Router) {
    setTimeout(() => {
      this.router.navigateByUrl('login')
    }, 4000);
  }
}
