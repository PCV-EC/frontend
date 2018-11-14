import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {PaginaInicioComponent} from './pagina-inicio/pagina-inicio.component';
import {PedidosComponent} from './pedidos/pedidos.component';
import {DetallePedidoComponent} from './detalle-pedido/detalle-pedido.component';
import {MensajesComponent} from './mensajes/mensajes.component';
import {AppRoutingModule} from './/app-routing.module';
import {HttpClientModule} from "@angular/common/http";

import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './in-memory-data.service';


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
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {dataEncapsulation: false}
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
