import { Injectable } from "@angular/core";
import { FinishedOrders } from "./finished-orders.model";
import { UserService } from "src/app/auth/user.service";
import { ProductService } from "src/app/products.service";

@Injectable({
    providedIn: 'root'
  })
  export class FinishedOrdersService {
  
    constructor(private userService: UserService, private productService: ProductService) { }
  
    private orders: FinishedOrders [] = [
      { id: 1,destination:'Rtanj',distance:'197 km', price: '20000 RSD', time: '147 min', date: new Date("2021-04-14"), userId: 1, status: 'cancelled', products: [1, 2] }, 
      { id: 2,destination:'Tara',distance:'230 km', price:'3500 RSD', time: '260 min', date: new Date("2021-01-18"), userId: 1, status: 'cancelled', products: [3, 4, 5] }, 
      { id: 3,destination:'Prolom Banja',distance:'273 km', price:'50000 RSD',time: '235 min', date: new Date("2021-05-13"), userId: 3, status: 'done', products: [6, 7, 8, 9] }, 
      { id: 4,destination:'Golija',distance:'269 km', price:'30000 RSD',time: '244 min', date: new Date("2022-05-20"), userId: 1, status: 'done', products: [13, 14, 15] },
      { id: 5,destination:'Fruška gora',distance:'109 km', price: '3600 RSD', time: '124 min', date: new Date("2021-06-21"), userId: 2, status: 'cancelled', products: [5,6] }, 
      { id: 6,destination:'Suva planina',distance:'289 km', price:'10000 RSD', time: '205 min', date: new Date(), userId: 2, status: 'done', products: [8, 9, 10] }, 
      { id: 7,destination:'Kosmaj',distance:'76 km', price:'15000 RSD',time: '84 min', date: new Date(), userId: 2, status: 'done', products: [15,16,17,18] }, 
      { id: 8,destination:'Studenica',distance:'238 km', price:'3000 RSD',time: '218 min', date: new Date(), userId: 1, status: 'done', products: [12,13,20] },
      { id: 9,destination:'Perućko jezero',distance:'196 km', price: '10000 RSD', time: '202 min', date: new Date(), userId: 3, status: 'cancelled', products: [8,9,19] }, 
      { id: 10,destination:'Homoljske planine',distance:'137 km', price:'20000 RSD', time: '151 min', date: new Date(), userId: 3, status: 'cancelled', products: [6,7] }, 
      { id: 11,destination:'Drina',distance:'253 km', price:'6000 RSD',time: '268 min', date: new Date(), userId: 1, status: 'done', products: [2,3,4] },
      { id: 12,destination:'Srebrno jezero',distance:'92 km', price:'5000 RSD',time: '114 min', date: new Date(), userId: 1, status: 'cancelled', products: [11] }, 
    
    ];

    orders1: any[] = [];
    products = this.productService.getProducts();
    orders2: any[] = [];
    getData(){
      this.orders.forEach(element => {
        if (element.userId == this.userService.currentUser.id) {
          this.orders1.push(element);
        }
      });

      return this.orders1;
    }
}
  