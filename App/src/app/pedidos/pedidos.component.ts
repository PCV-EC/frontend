import {Component, OnInit} from '@angular/core';
import {PEDIDOS} from '../mock-pedidos';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  pedidos = PEDIDOS;

  constructor() {
  }

  ngOnInit() {
  }

}
