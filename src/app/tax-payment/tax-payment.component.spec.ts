import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxPaymentComponent } from './tax-payment.component';

describe('TaxPaymentComponent', () => {
  let component: TaxPaymentComponent;
  let fixture: ComponentFixture<TaxPaymentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaxPaymentComponent]
    });
    fixture = TestBed.createComponent(TaxPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
