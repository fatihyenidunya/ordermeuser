import { Component, OnInit } from '@angular/core';
import { OrderService } from './order.service';
import { Observable } from 'rxjs';
import { IOrder } from '../_product/model/order';


@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  public orders : IOrder[]=[];

  constructor(private orderService : OrderService) {  
    this.orderService.getOrders().subscribe((res: IOrder[]) => {
    this.orders = res;
    console.log(res);
  });

}

  ngOnInit() {
  }

}
