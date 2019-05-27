import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Order } from '../_product/model/order';
import { AppConnections } from '../app.connections';

@Injectable({
  providedIn: 'root'
})
export class OrderService {


  public baseUrl;
    
  constructor(private httpClient : HttpClient, private appConnections: AppConnections ) { 

    this.baseUrl = appConnections.api;
  }

  getOrders(){      
     
    return this.httpClient.get(this.baseUrl + "api/order/get");
   
}


}
