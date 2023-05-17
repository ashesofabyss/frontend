import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-add-edit-product',
  templateUrl: './add-edit-product.component.html',
  styleUrls: ['./add-edit-product.component.css']
})
export class AddEditProductComponent implements OnInit {  
  form: FormGroup;
  id: number;
  operation: string = 'დამატება';

  constructor(private fb: FormBuilder,
    private _productService: ProductService,
    private router: Router,
    private toastr: ToastrService,
    private aRouter: ActivatedRoute) { 
    this.form = this.fb.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      price: [null, Validators.required],
    })
    this.id = Number(aRouter.snapshot.paramMap.get('id'));
    console.log(aRouter.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {

    if(this.id != 0) {
      this.operation = 'შეცვლა';
      this.getProduct(this.id);
    }
  }

  getProduct(id: number) {
    this._productService.getProduct(id).subscribe((data:Product) => {
      this.form.setValue({
        name: data.name,
        address: data.address,
        price: data.price
      })
    })
  }

  addProduct() {
    console.log(this.form.value.name);
    console.log(this.form.get('name'));
    
    const product: Product = {
      name: this.form.value.name,
      address: this.form.value.address,
      price: this.form.value.price
    }

    if(this.id !== 0) {
      product.id = this.id;
      this._productService.updateProduct(this.id, product).subscribe(() => {
        this.toastr.success(`ნივთი ${product.name} წარმატებით შეიცვალა`)
        this.router.navigate(['/']);
      })
    } else {
      this._productService.saveProduct(product).subscribe(() => {
        this.toastr.success(`ნივთი ${product.name} წარმატებით დარეგისტრირდა`)
        this.router.navigate(['/']);
      })
    }
    
    

  }

  
}
