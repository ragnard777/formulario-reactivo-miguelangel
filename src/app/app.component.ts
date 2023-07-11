import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  /*   nombre = new FormControl('');
  apellido = new FormControl('');
  ciudad = new FormControl(''); */
  title = 'Entrega de  Reactivo';

  /*   formularioPerfil = new FormGroup({
    nombre: new FormControl(''),
    apellido: new FormControl(''),
    ciudad: new FormControl(''),
  });
 */

  constructor(private _formBuilder: FormBuilder) {}

  formularioPerfil = this._formBuilder.group({
    nombre: ['', [Validators.required, Validators.minLength(2)]],
    apellido: ['', [Validators.required, Validators.minLength(2)]],
    ciudad: ['', [Validators.required, Validators.minLength(4)]],
    email: ['', [Validators.required, Validators.email]],
  });

  ngOnInit(): void {}

  validarFormulario() {
    console.warn(this.formularioPerfil.value);
  }
}
