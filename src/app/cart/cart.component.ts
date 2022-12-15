import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private cartService: CartService) { }

  items = this.cartService.getItems();

  getTotal(){
    var total = 0;
    for(var i=0; i< this.items.length;i++){
      total = total + this.items[i].price;
    }
    return total;
  }

  checkout(){
    var total = 0;
    if(this.items.length != 0)
      alert('Your purches was succesfull!');
    else{
      
      alert('Your cart is empty!');
    }

      for(var i=0; i< this.items.length;i++){
        this.items.length = 0;
      }
  }


  deleteItem(indexOfelement: number){
    this.items.splice(indexOfelement, 1); 
    console.log(this.items); 
  }

  ngOnInit(): void {
  }

}
