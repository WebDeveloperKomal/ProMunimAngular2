import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodsAndServiceTaxComponent } from './goods-and-service-tax.component';

describe('GoodsAndServiceTaxComponent', () => {
  let component: GoodsAndServiceTaxComponent;
  let fixture: ComponentFixture<GoodsAndServiceTaxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GoodsAndServiceTaxComponent]
    });
    fixture = TestBed.createComponent(GoodsAndServiceTaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
