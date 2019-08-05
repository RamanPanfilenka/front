import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm} from '@angular/forms';
import { Company } from '../models/company';
import { CompanyService } from '../services/company.service';
import { OrderService } from '../services/order.service';
import { Order } from '../models/order';
@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})


export class OrderFormComponent implements OnInit {

  order = new Order(0,"","",false,0,0);
  existed = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private orderService: OrderService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(p => {
      if (p['id'] === undefined) {
        document.getElementById('compayIdSpan').textContent = localStorage.getItem('companyId');
        return;
      };
      this.orderService.getOrder(p['id']).subscribe(h => this.order = h);
      this.existed = true;
    });
  }

  navigateToCompanys() {
    this.router.navigate(['/companys']);
  }

  onCancel() {
    this.navigateToCompanys();
  }
  
  onSubmit() {
      if(this.existed){
        this.orderService.updateOrder(this.order).subscribe(c => this.navigateToCompanys());
      }else{
        this.orderService.addOrder(this.order).subscribe(c => this.navigateToCompanys());
      }
  }

  onDelete() {
    this.orderService.setOrderStatus(this.order.id, true).subscribe(c => this.order.isDeleted = true);
  } 

  onUndelete() {
    this.orderService.setOrderStatus(this.order.id, false).subscribe(c => this.order.isDeleted = false);
  }

  onPurge() {
    this.orderService.deleteOrder(this.order.id).subscribe(c => this.navigateToCompanys());
  }
}
