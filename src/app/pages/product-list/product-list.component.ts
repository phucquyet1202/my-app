import { Component } from '@angular/core';
import { IProduct } from 'src/app/interface/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products !: IProduct[]
  constructor(private productService: ProductService) {
    this.productService.getProducts().subscribe(data => this.products = data)
  }
  removeItem(id: number) {
    const logger = confirm('Are you sure you want to delete this item')
    if (logger) {
      this.productService.deleteProducts(id).subscribe(() => {
        this.products = this.products.filter(p => p.id !== id)
      })

    }
  }
  onHandle(id: number) {
    window.location.href = `product/edit/${id}`
  }
}
