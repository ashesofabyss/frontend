import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
let AddEditProductComponent = class AddEditProductComponent {
    constructor(fb) {
        this.fb = fb;
        this.form = this.fb.group({
            name: ['', Validators.required],
            description: ['', Validators.required],
            price: [null, Validators.required],
            stock: [null, Validators.required],
        });
    }
    ngOnInit() {
    }
    addProduct() {
        console.log(this.form.value.name);
        console.log(this.form.get('name'));
        const product = {
            name: this.form.value.name,
            description: this.form.value.description,
            price: this.form.value.price,
            stock: this.form.value.stock
        };
        console.log(product);
    }
};
AddEditProductComponent = __decorate([
    Component({
        selector: 'app-add-edit-product',
        templateUrl: './add-edit-product.component.html',
        styleUrls: ['./add-edit-product.component.css']
    })
], AddEditProductComponent);
export { AddEditProductComponent };
//# sourceMappingURL=add-edit-product.component.js.map