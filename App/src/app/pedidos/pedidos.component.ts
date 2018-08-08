import {Component, OnInit} from '@angular/core';
import {Pedido} from "../pedido";

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  pedido: Pedido = {
    idPedido: 1,
    itemsCompradosPedido: ["Churrasco", "Combo5", "Jugo de Guanabana"],
    valorTotalCompraPedido: 17.43,
    estadoPedido: "solicitado"
  };

  constructor() {
  }

  ngOnInit() {
  }

}
