import { Component, OnInit } from '@angular/core';
import { Cart } from '../cart.model';
import { CartServices } from '../cart.service';
import { HttpClient } from '@angular/common/http';
import { Order } from '../order.model';
import { NewOrderServices } from '../neworder.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mycart',
  templateUrl: './mycart.component.html',
  styleUrls: ['./mycart.component.css']
})
export class MycartComponent implements OnInit {
 
  constructor(private cartSer:CartServices,private http:HttpClient,private newOrde:NewOrderServices,
    private router: Router) { }

  cart : Cart[] ;
  order : Order[];

  final_total :number =0;

ngOnInit(): void {

this.cart = this.cartSer.getcart();

for(let i of this.cart)
{
  this.final_total = this.final_total + i.product_total;
  
}
  }

  deleteCart(index:number)
  {
  
    this.cartSer.deleteCart(index);
    this.cart = this.cartSer.getcart();
    this.final_total=0;
    for(let i of this.cart)
    {
      this.final_total = this.final_total + i.product_total;
      
    }
    
    
  }

  
  placeOrder2()
  {
    
    for(let i of this.cart)
    {
    const items =   new Order(i.product_id,i.product_name,i.product_count,i.product_price);
      this.newOrde.addToOrder(items);
    }
  
     let products2:Order[];

    products2 = this.newOrde.getOrder();
  let  amount = this.final_total;
  let  address = "INDIA";
  let    user = "5eeb8eb0f5f1be0c3830ecef";

  let postData = 
  {
    products : products2,
    amount : amount,
    address :address,
    user : user


  }

    this.http.post('http://localhost:3004/api/order',postData).subscribe(responseData => {
        console.log(responseData);
       
        alert("Order is created !!!!");
        this.router.navigate(['/main']);
      });

  }

}
