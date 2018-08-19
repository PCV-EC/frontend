import {Component, OnInit} from '@angular/core';
import {PEDIDOS} from '../mock-pedidos';
import {Pedido} from "../pedido";

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  pedidos = PEDIDOS;

  pedidoSeleccionado: Pedido;

  onSelect(pedido: Pedido): void {
    this.pedidoSeleccionado = pedido;
    console.log(this.pedidoSeleccionado);
  }

  constructor() {
  }

  ngOnInit() {
  }

}
