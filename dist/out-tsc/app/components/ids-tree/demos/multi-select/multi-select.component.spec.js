import { TestBed } from '@angular/core/testing';
import { MultiSelectComponent } from './multi-select.component';
describe('MultiSelectComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [MultiSelectComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(MultiSelectComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=multi-select.component.spec.js.map