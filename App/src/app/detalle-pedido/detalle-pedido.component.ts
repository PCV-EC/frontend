import {Component, Input, OnInit} from '@angular/core';
import { Pedido } from "../pedido";

@Component({
  selector: 'app-detalle-pedido',
  templateUrl: './detalle-pedido.component.html',
  styleUrls: ['./detalle-pedido.component.css']
})
export class DetallePedidoComponent implements OnInit {

  @Input() pedido: Pedido;

  constructor() { }

  ngOnInit() {
  }

}
