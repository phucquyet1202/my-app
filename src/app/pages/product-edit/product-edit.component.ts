import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { FormBuilder } from '@angular/forms'
import { ActivatedRoute } from '@angular/router'
import { IProduct } from 'src/app/interface/product';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent {
  product !: IProduct
  productForm = this.formBuilder.group({
    name: [''],
    price: [0]
  })
  constructor(
    private productService: ProductService,
    private ActivatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    this.ActivatedRoute.paramMap.subscribe((param) => {
      const id = Number(param.get('id'));
      this.productService.getProduct(id).subscribe(item => {
        this.product = item
        this.productForm.patchValue({
          name: item.name,
          price: item.price
        })
      });

    })
  }

  onHandleClick() {
    const product = {
      id: this.product.id,
      name: this.productForm.value.name || '',
      price: this.productForm.value.price || 0,

    }
    this.productService.updateProducts(product).subscribe(pro => console.log(pro))
    window.location.href = '/'
  }
}
