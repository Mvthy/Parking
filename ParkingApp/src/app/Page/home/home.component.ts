import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  usuariohome: string = ''; //variable que recibe el dato del input usuario del componente Login
  selectedSegment: string = 'estacionamiento'; // Valor inicial para el segmento seleccionado
  tipoUsuario: string = ''; // Variable para almacenar el tipo de usuario

  constructor(private route: ActivatedRoute) {
    // Obtenemos los queryParams al inicializar el componente
    this.route.queryParams.subscribe(params => {
      // Verifica si el parámetro 'usuario' existe en los queryParams
      this.usuariohome = params['usuario'] || ''; // Recibe el dato del input desde Login
      this.tipoUsuario = params['tipoUsuario'] || ''; // Recibe el tipo de usuario
    });
  }

  ngOnInit(): void {}

}
