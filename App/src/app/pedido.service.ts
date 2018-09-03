import { Injectable } from '@angular/core';
import { Pedido} from "./pedido";
import { PEDIDOS} from "./mock-pedidos";
import { Observable, of } from "rxjs";
import { MensajeService } from "./mensaje.service";

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  constructor(private mensajeService: MensajeService) { }

  obtenerPedidos(): Observable<Pedido[]> {
    this.mensajeService.add('PedidoService: pedidos ya son locales');
    return of(PEDIDOS);
  }

  obtenerPedido(id: number): Observable<Pedido>{
    this.mensajeService.add(`PedidoService: pedido id=${id} capturado`);
    return of(PEDIDOS.find(pedido => pedido.idPedido === id));
  }
}
