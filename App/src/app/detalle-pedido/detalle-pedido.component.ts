import {Component, Input, OnInit} from '@angular/core';
import {Pedido} from "../pedido";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import {PedidoService} from "../pedido.service";

@Component({
  selector: 'app-detalle-pedido',
  templateUrl: './detalle-pedido.component.html',
  styleUrls: ['./detalle-pedido.component.css']
})
export class DetallePedidoComponent implements OnInit {

  @Input() pedido: Pedido;

  constructor(
    private ruta: ActivatedRoute,
    private pedidoService: PedidoService,
    private location: Location
  ) {
  }

  ngOnInit(): void {
    this.obtenerPedido();
  }

  obtenerPedido(): void {
    const idPedido = +this.ruta.snapshot.paramMap.get('id');
    this.pedidoService.obtenerPedido(idPedido)
      .subscribe(pedido => this.pedido = pedido);
  }

  regresar(): void {
    this.location.back();
  }
}
