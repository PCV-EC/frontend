import { Component, OnInit } from '@angular/core';
import {Pedido} from '../pedido';
import {PedidoService} from "../pedido.service";

@Component({
  selector: 'app-pagina-inicio',
  templateUrl: './pagina-inicio.component.html',
  styleUrls: ['./pagina-inicio.component.css']
})
export class PaginaInicioComponent implements OnInit {

  pedidos: Pedido[] = [];

  constructor(private pedidoService: PedidoService) { }

  ngOnInit() {
    this.obtenerPedidos();
  }

  obtenerPedidos(): void {
    this.pedidoService.obtenerPedidos()
      .subscribe(pedidos => this.pedidos = pedidos.slice(1, 3));
  }

}
