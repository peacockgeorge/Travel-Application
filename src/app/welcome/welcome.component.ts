import { Component, OnInit } from '@angular/core';
import { ProductService } from '../products.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private productService: ProductService) { }
  products = this.productService.getProducts();
  pageProd = this.products;
  pageProd1 = this.products;

  ngOnInit(){
    for (var i = this.products.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = this.pageProd1[i];
      this.pageProd1[i] = this.pageProd1[j];
      this.pageProd1[j] = temp;
  }
    this.pageProd=[]
    for(var i=0; i<3;i++){
      this.pageProd.push(this.pageProd1[i]);
    }
  }

  images = ['../../assets/images/13.jpg', '../../assets/images5.jpg', '../../assets/images6.jpg', '../../assets/images14.jpg'];
}
