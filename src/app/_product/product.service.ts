import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './model/product';



import { Order } from './model/order';
import { AppConnections } from '../app.connections';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


    public baseUrl;
    
  constructor(private httpClient : HttpClient, private appConnections: AppConnections ) { 

    this.baseUrl = appConnections.api;


  }

getCategories(){     

    return this.httpClient.get(this.baseUrl + "api/category");
     
}

getProducts(){      
     
    return this.httpClient.get(this.baseUrl + "api/product/get");
   
}

getProduct(id){     
  return this.httpClient.get(this.baseUrl + "api/product/getproduct/" + id);     
}

save(data: Product){
  return this.httpClient.post(this.baseUrl + "api/product/post/" , data);
}
update(data:Product){
  return this.httpClient.put(this.baseUrl + "api/product/put/" + data.id , data);
}
delete(data: Product){
  return this.httpClient.delete(this.baseUrl + "api/product/delete/" + data.id );
}


giveAnOrder(order: Order){
  return this.httpClient.post(this.baseUrl + "api/order/" , order).subscribe(data => {console.log("data has been saved")});
}


}
