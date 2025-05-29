import { NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-productos',
  imports: [NgFor],
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'], // Aquí va el archivo de estilos
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductosComponent {
  productos = [
    {
      nombre: 'Cámara Vintage',
      descripcion: 'Cámara antigua de colección con cuerpo metálico.',
      imagen: 'https://i.pinimg.com/736x/ab/e6/5c/abe65c2dfb0f616858238b584f8a468b.jpg'
    },
    {
      nombre: 'Lámpara de Escritorio',
      descripcion: 'Lámpara LED ajustable, ideal para estudios.',
      imagen: 'https://i.pinimg.com/736x/ab/e6/5c/abe65c2dfb0f616858238b584f8a468b.jpg'
    },
    {
      nombre: 'Auriculares Inalámbricos',
      descripcion: 'Auriculares con cancelación de ruido y estuche de carga.',
      imagen: 'https://i.pinimg.com/736x/ab/e6/5c/abe65c2dfb0f616858238b584f8a468b.jpg'
    },
    {
      nombre: 'Reloj Deportivo',
      descripcion: 'Reloj con monitor de ritmo cardíaco y GPS integrado.',
      imagen: 'https://i.pinimg.com/736x/ab/e6/5c/abe65c2dfb0f616858238b584f8a468b.jpg'
    },
    {
      nombre: 'Mochila Urbana',
      descripcion: 'Mochila resistente al agua con múltiples compartimentos.',
      imagen: 'https://i.pinimg.com/736x/ab/e6/5c/abe65c2dfb0f616858238b584f8a468b.jpg'
    }
  ];
}
