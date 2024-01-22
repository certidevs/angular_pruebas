import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosComponent } from "./productos/productos.component";
import { ClientesComponent } from "./clientes/clientes.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, ProductosComponent, ClientesComponent]
})
export class AppComponent {
  title = 'holaMundo2';
}
