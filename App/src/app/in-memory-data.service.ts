import {InMemoryDbService} from 'angular-in-memory-web-api';
import {Pedido} from "./pedido";

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const pedidos: Pedido[] = [
      {
        idPedido: 1,
        itemsCompradosPedido: ["Churrasco", "Combo5", "Jugo de Guanabana"],
        valorTotalCompraPedido: 17.43,
        estadoPedido: "solicitado"
      },

      {
        idPedido: 2,
        itemsCompradosPedido: ["Parrillada", "Combo1", "Gaseosa"],
        valorTotalCompraPedido: 22.57,
        estadoPedido: "solicitado"
      },

      {
        idPedido: 3,
        itemsCompradosPedido: ["Trucha a la Plancha", "Combo2", "Limonada"],
        valorTotalCompraPedido: 18.78,
        estadoPedido: "solicitado"
      },

      {
        idPedido: 4,
        itemsCompradosPedido: ["Locro de Queso", "Carne a la Plancha", "Jugo de Mora"],
        valorTotalCompraPedido: 7.23,
        estadoPedido: "solicitado"
      },

      {
        idPedido: 5,
        itemsCompradosPedido: ["Combo3", "Combo1"],
        valorTotalCompraPedido: 12.00,
        estadoPedido: "solicitado"
      }
    ];
    return {pedidos};
  }
}
