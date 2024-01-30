import { Component } from '@angular/core';
import { Producto } from '../interfaces/product.model';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {

  nombres: string[] = ['Coche', 'Moto', 'Patinete', 'Skate', 'Patines'];

  productos: Producto[] = [
    {
      id: 1,
      nombre: 'Coche',
      precio: 10000,
      descripcion: 'Coche de gasolina'
    },
    {
      id: 2,
      nombre: 'Moto',
      precio: 5000,
      descripcion: 'Moto de gasolina'
    },
    {
      id: 3,
      nombre: 'Patinete',
      precio: 100,
      descripcion: 'Patinete eléctrico'
    },
    {
      id: 4,
      nombre: 'Skate',
      precio: 50,
      descripcion: 'Skate'
    },
    {
      id: 5,
      nombre: 'Patines',
      precio: 80,
      descripcion: 'Patines'
    }
  ];

    

}
