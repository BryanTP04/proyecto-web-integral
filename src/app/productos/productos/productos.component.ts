import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-productos',
  imports: [],
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'], // Aquí va el archivo de estilos
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductosComponent { }
