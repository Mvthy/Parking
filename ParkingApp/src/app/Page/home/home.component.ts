import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; //Librería de navegación

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  usuariohome: string = ''; //variable que recibe el dato del input usuario del componente Login

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      this.usuariohome = navigation.extras.state['usuariologin']; //Recibe el dato del input desde Login
    }
  }

  ngOnInit(): void {}

}
