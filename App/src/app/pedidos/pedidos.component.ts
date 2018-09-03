import {Component, OnInit} from '@angular/core';
import {PedidoService} from "../pedido.service";
import {Pedido} from "../pedido";

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  pedidos: Pedido[];

  constructor(private pedidoService: PedidoService) {
  }

  ngOnInit() {
    this.obtenerPedidos();
  }

  obtenerPedidos(): void {
    this.pedidoService.obtenerPedidos()
      .subscribe(pedidos => this.pedidos = pedidos);
  }

}
