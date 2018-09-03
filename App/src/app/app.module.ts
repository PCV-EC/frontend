import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PaginaInicioComponent } from './pagina-inicio/pagina-inicio.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { DetallePedidoComponent } from './detalle-pedido/detalle-pedido.component';
import { MensajesComponent } from './mensajes/mensajes.component';
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    PaginaInicioComponent,
    PedidosComponent,
    DetallePedidoComponent,
    MensajesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
