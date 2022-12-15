import { Component, OnInit, ViewChild } from '@angular/core';
import { Product } from '../product.model';
import { MatPaginator } from '@angular/material/paginator';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart/cart.service'; 
import { ProductService } from '../products.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  product: Product | undefined;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private route: ActivatedRoute, private cartService: CartService, private productService: ProductService) { }
  products = this.productService.getProducts();
  pageSlice = this.products.slice(0,9);
  selected = '';

  showAll(){
    this.pageSlice=[]
    this.pageSlice=this.products;
  }

  showLess(){
    this.pageSlice=[]
    for(var i=0; i< this.products.length;i++){
      if (this.products[i].quantity<=0){
      this.pageSlice.push(this.products[i]);}
    }
  }

  showMore(){
    this.pageSlice=[]
    for(var i=0; i< this.products.length;i++){
      if (this.products[i].quantity>0){
      this.pageSlice.push(this.products[i]);}
    }
  };

  selectCategory() {
    this.pageSlice=[]
    for(var i=0; i< this.products.length; i++) {
      if (this.products[i].category == this.selected) {
        this.pageSlice.push(this.products[i]);
      } 
      if (this.selected == undefined) {
        this.pageSlice = this.products;
      }
    }
  }

  onPageChange(event: PageEvent){
    const startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if ( endIndex > this.products.length){
      endIndex = this.products.length;
    }
    this.pageSlice = this.products.slice(startIndex, endIndex);
  }



  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));
    this.product = this.productService.getProducts().find(product => product.id === productIdFromRoute);
  }
  addToCart(product: Product) {
    if (product.quantity <= 0) {
      window.alert('This travel is currently unvailable!');
    } else {
      this.cartService.addToCart(product);
      window.alert('Your travel has been added to the cart!');
    }
  }
}
