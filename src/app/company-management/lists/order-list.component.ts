import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';
import { ActivatedRoute } from '@angular/router';
import { OrderListItem } from '../models/order-list-item';
import { Order } from '../models/order';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  orders: OrderListItem[];

  constructor(
    private route: ActivatedRoute,
    private orderService: OrderService,
    private navig: Router) { }

  ngOnInit() {
    this.route.params.subscribe(p => {
      this.orderService.getOrders(p['id']).subscribe(h => this.orders = h);
    });
  }

  OnNewOrder(){
    this.route.params.subscribe(p => {
      localStorage.setItem('idCompany', p['id']);
    });
  }

  getConponys() {
  }

  onDelete(orderId: number) {
    var order = this.orders.find(h => h.id == orderId);
    this.orderService.setOrderStatus(orderId, true).subscribe(c => order.isDeleted = true);
  }

  onVievOrders(order: Order){
    console.log(order);
    localStorage.setItem('productId', order.productId.toString());
    this.navig.navigate(['/order/' + order.id + '/product'])
  }
}
