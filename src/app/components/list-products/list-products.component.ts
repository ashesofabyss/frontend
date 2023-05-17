import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListproductsComponent implements OnInit {
  listProducts: Product[] = []
  selectedAddress: string = '';
  allProducts: Product[] = [];
  currentPage: number = 1;
  productsPerPage: number = 20;
  selectedSortOption: string = '';

  constructor(private _productService: ProductService, private toastr: ToastrService, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this._productService.getListProducts().subscribe((data: Product[]) => {
      this.allProducts = data;
      this.filterInventory();
      this.sortInventory();
    });
  }

  getListProducts() {
    this._productService.getListProducts().subscribe((data: Product[]) => {
      this.allProducts = data;
    })
  }


  deleteProduct(id: number) {
    
    this._productService.deleteProduct(id).subscribe(() => {
      this.listProducts = this.listProducts.filter(item => item.id !== id);
      this.toastr.warning('პროდუქტი წარმატებით წაიშალა');
      this.cdr.detectChanges();
    })
  }

  onAddressChange(event: any) {
    const address = event.target.value;
    this.selectedAddress = address;
    this.currentPage = 1;
    this.filterInventory();
  }

  filterInventory() {
    let filteredProducts = this.allProducts;
  
    if (this.selectedAddress !== '') {
      filteredProducts = filteredProducts.filter(product => product.address === this.selectedAddress);
    }
  
    const startIndex = (this.currentPage - 1) * this.productsPerPage;
    this.listProducts = filteredProducts.slice(startIndex, startIndex + this.productsPerPage);
  }

  onPageChange(pageNumber: number) {
    this.currentPage = pageNumber;
    this.filterInventory();
  }

  getTotalPages(): number {
    return Math.ceil(this.listProducts.length / this.productsPerPage);
  }

  getPageNumbers(): number[] {
    const totalPages = Math.ceil(this.allProducts.length / this.productsPerPage);
    return Array.from({ length: totalPages }, (_, index) => index + 1);
  }

  getTotalProductsCount(): number {
    return this.allProducts.length;
  }

  onSortOptionChange(event: any) {
    const selectedOption = event?.target?.value;
    this.selectedSortOption = selectedOption;
    this.currentPage = 1;
    this.sortInventory();
  }

  sortInventory() {
    if (this.selectedSortOption === 'სახელით') {
      this.allProducts.sort((a, b) => a.name.localeCompare(b.name));
    } else if (this.selectedSortOption === 'ფასით') {
      this.allProducts.sort((a, b) => a.price - b.price);
    }

    this.filterInventory();
  }
}



