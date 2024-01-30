import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosComponent } from "./productos/productos.component";
import { ClientesComponent } from "./clientes/clientes.component";
import { PedidosComponent } from "./pedidos/pedidos.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, ProductosComponent, ClientesComponent, PedidosComponent, ProductDetailComponent]
})
export class AppComponent {
  title = 'holaMundo2';
}
