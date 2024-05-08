import { Product, Products } from './../../types';
import { Component, input } from '@angular/core';
import { ProductsService } from '../Services/products.service';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '../Components/product/product.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ProductComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  products: Product[] = [];
  constructor (private productService:ProductsService){}

  //  ngOnInit() {
  //   this.fetchProducts(0, this.rows);
  // }
  ngOnInit() {
    this.productService.getProducts('http://localhost:3000/clothes',{page:0, perPage:5}).subscribe((products:Products)=>{
      console.log(products.items)
    })
  }
    // fetchProducts(page: number, perPage: number) {
    // }
}
