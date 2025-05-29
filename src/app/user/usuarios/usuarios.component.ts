import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-usuarios',
  imports: [FormsModule],
  templateUrl: './usuarios.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsuariosComponent {
  usuario = {
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  guardar() {
    console.log('Datos del usuario:', this.usuario);


  }
 }
