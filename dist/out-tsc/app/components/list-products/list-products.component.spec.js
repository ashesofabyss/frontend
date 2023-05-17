import { TestBed } from '@angular/core/testing';
import { ListproductsComponent } from './list-products.component';
describe('ListproductsComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ListproductsComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(ListproductsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=list-products.component.spec.js.map