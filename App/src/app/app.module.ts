import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PaginaInicioComponent } from './pagina-inicio/pagina-inicio.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { DetallePedidoComponent } from './detalle-pedido/detalle-pedido.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginaInicioComponent,
    PedidosComponent,
    DetallePedidoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
