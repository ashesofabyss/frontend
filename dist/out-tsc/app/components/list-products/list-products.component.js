import { __decorate } from "tslib";
import { Component } from '@angular/core';
let ListproductsComponent = class ListproductsComponent {
    constructor(_productService) {
        this._productService = _productService;
        this.listProducts = [];
    }
    ngOnInit() {
        this.getListProducts();
    }
    getListProducts() {
        this._productService.getListProducts().subscribe((data) => {
            this.listProducts = data;
        });
    }
};
ListproductsComponent = __decorate([
    Component({
        selector: 'app-list-products',
        templateUrl: './list-products.component.html',
        styleUrls: ['./list-products.component.css']
    })
], ListproductsComponent);
export { ListproductsComponent };
//# sourceMappingURL=list-products.component.js.map