import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable, Observer } from 'rxjs';
import { OrderListItem } from '../models/order-list-item';
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  
  private url = environment.apiUrl + 'api/orders/';

  constructor(private http: HttpClient) { }

  getOrder(orderId):Observable<Order>{
    return this.http.get<Order>(`${this.url}${orderId}/status/false`);
  }

  getOrders(companyId): Observable<Array<OrderListItem>> {
    return this.http.get<Array<OrderListItem>>(`${this.url}${companyId}`);
  }

  deleteOrder(orderId: number): Observable<Object> {
    return this.http.delete(`${this.url}${orderId}`);
  }

  addOrder(order: Order): Observable<Object>{
    return this.http.post(`${this.url}`, order);
  }

  updateOrder(order: Order): Observable<Object>{
    return this.http.put(`${this.url}${order.id}`, order);
  }

  setOrderStatus(orderId: number, deletedStatus: boolean): Observable<Object> {
    return this.http.put(`${this.url}${orderId}/status/${deletedStatus}`, Object);
  }
}
