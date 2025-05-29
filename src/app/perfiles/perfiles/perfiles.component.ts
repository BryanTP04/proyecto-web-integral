import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-perfiles',
  imports: [],
  templateUrl: './perfiles.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PerfilesComponent {
  perfiles = [
    {
      nombre: 'Juan Pérez',
      correo: 'juan.perez@example.com',
      rol: 'Administrador',
      imagen: 'https://via.placeholder.com/350x200?text=Juan'
    },
    {
      nombre: 'Ana López',
      correo: 'ana.lopez@example.com',
      rol: 'Usuario',
      imagen: 'https://via.placeholder.com/350x200?text=Ana'
    },
    {
      nombre: 'Luis García',
      correo: 'luis.garcia@example.com',
      rol: 'Editor',
      imagen: 'https://via.placeholder.com/350x200?text=Luis'
    }
  ];
}
