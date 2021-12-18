
import {Cart} from './cart.model';
import { EventEmitter} from '@angular/core';


export class CartServices
{
    CartChanged = new EventEmitter<Cart[]>();
    cart : Cart[] =[];


    getcart()
    {
        return this.cart.slice();
    }

    
    addCart(cartitems:Cart)
      {
          this.cart.push(cartitems);
          this.CartChanged.emit(this.cart.slice());
      }



      deleteCart(index:number)
      {
       
         
        this.cart.splice(index, 1);     
        }
      


}