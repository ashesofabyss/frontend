import { TestBed } from '@angular/core/testing';
import { AddEditProductComponent } from './add-edit-product.component';
describe('AddEditProductComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [AddEditProductComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(AddEditProductComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=add-edit-product.component.spec.js.map