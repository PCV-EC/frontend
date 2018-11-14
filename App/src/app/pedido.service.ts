import {Injectable} from '@angular/core';
import {Pedido} from "./pedido";
import {Observable, of} from "rxjs";
import {MensajeService} from "./mensaje.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, map, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  private pedidosUrl = 'api/pedidos';

  constructor(
    private http: HttpClient,
    private mensajeService: MensajeService) {
  }

  private log(mensaje: string) {
    this.mensajeService.add(`PedidoService: ${mensaje}`)
  }

  obtenerPedidos(): Observable<Pedido[]> {
    return this.http.get<Pedido[]>(this.pedidosUrl)
      .pipe(
        tap(pedidos => this.log('pedidos capturados')),
        catchError(this.handleError('obtenerPedidos', []))
      );
  }

  obtenerPedido(id: number): Observable<Pedido> {
    const url = `${this.pedidosUrl}/${id}`;
    return this.http.get<Pedido>(url).pipe(
      tap(_ => this.log(`pedido capturado id=${id}`)),
      catchError(this.handleError<Pedido>(`obtenerPedido id=${id}`))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} falló: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
