import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { IProduct } from '../model/product';
import { Observable } from 'rxjs';
import { Order } from '../model/order';



@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  public products : IProduct[]=[];
 
  public selectedCategory;

  
public newOrder =  new Order();

  constructor(private productService : ProductService) {  
      this.productService.getProducts().subscribe((res: IProduct[]) => {
      this.products = res;
      console.log(res);
    });

  }

 order(productTitle):void {

  let now = new Date();
  this.newOrder.customer="hoppa";
  this.newOrder.customerId=234;
  this.newOrder.number=455;
  this.newOrder.price=9999;
  this.newOrder.product=productTitle;
  this.newOrder.orderDate=now;
 

  this.productService.giveAnOrder(this.newOrder);

 }

  ngOnInit() {
  }

}
