import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderListComponent } from './order-list.component';
import { OrderRoutingModule } from './order-routing.module';
import { OrderService } from './order.service';



@NgModule({
  declarations: [OrderListComponent],
  imports: [
    CommonModule,
    OrderRoutingModule
  ],
  providers: [
    OrderService
  ]
})
export class OrderModule { }
