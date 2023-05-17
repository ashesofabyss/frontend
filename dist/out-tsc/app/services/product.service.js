import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
let ProductService = class ProductService {
    constructor(http) {
        this.http = http;
        this.myAppUrl = environment.endpoint;
        this.myApiUrl = 'api/products';
    }
    getListProducts() {
        return this.http.get(`${this.myAppUrl}${this.myApiUrl}`);
    }
};
ProductService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], ProductService);
export { ProductService };
//# sourceMappingURL=product.service.js.map