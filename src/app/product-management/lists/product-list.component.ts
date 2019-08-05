import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductListItem } from '../models/product-list-item';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: ProductListItem[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(p => {
      if (p['id'] === undefined) {
        this.productService.getProducts().subscribe(p => this.products = p);
      }else{
        this.productService.getOrderProduct(+localStorage.getItem('productId')).subscribe(h => {
          this.products = [h];
        });
      };
    });
  }
}
