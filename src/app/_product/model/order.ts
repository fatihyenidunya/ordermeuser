export class Order {  

    id:number;
    customerId:number;
    customer:string;    
    product:string; 
    category:string;
    number:number;    
    price:number;
    orderDate:Date;  
  
}

export interface IOrder {  

    id:number;
    customerId:number;
    customer:string;    
    product:string; 
    category:string;
    number:number;    
    price:number;
    orderDate:Date;  
  
}