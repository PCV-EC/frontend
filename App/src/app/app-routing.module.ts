import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {PedidosComponent} from "./pedidos/pedidos.component";
import {PaginaInicioComponent} from "./pagina-inicio/pagina-inicio.component";
import {DetallePedidoComponent} from "./detalle-pedido/detalle-pedido.component";

const rutas: Routes = [
  {
    path: 'pedidos',
    component: PedidosComponent
  },
  {
    path: 'inicio',
    component: PaginaInicioComponent
  },
  {
    path: 'detalle/:id',
    component: DetallePedidoComponent
  },
  {
    path: '',
    redirectTo: '/inicio',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(rutas)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
