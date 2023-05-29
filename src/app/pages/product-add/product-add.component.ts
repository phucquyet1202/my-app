import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent {
  productForm = this.formBuilder.group({
    name: [''],
    price: [0]
  })
  constructor(
    private productService: ProductService,
    private formBuilder: FormBuilder
  ) { }
  onHandleClick() {
    const product = {
      name: this.productForm.value.name || '',
      price: this.productForm.value.price || 0,

    }
    this.productService.addProducts(product).subscribe(() => window.location.href = "/")
  }
}
