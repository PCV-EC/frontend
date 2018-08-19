import { Injectable } from '@angular/core';
import { Pedido} from "./pedido";
import { PEDIDOS} from "./mock-pedidos";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  obtenerPedidos(): Observable<Pedido[]> {
    return of(PEDIDOS);
  }

  constructor() { }
}
