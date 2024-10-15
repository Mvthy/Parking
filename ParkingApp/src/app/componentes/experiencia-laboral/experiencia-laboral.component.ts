import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-experiencia-laboral',
  templateUrl: './experiencia-laboral.component.html',
  styleUrl: './experiencia-laboral.component.css'
})
export class ExperienciaLaboralComponent {
  experienciaForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.experienciaForm = this.fb.group({
      empresa: [''],
      anoInicio: [''],
      trabajandoActualmente: [false],
      anoTermino: [''],
      cargo: ['']
    });
  }
}
