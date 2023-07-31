import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyFeesPaymentComponent } from './monthly-fees-payment.component';

describe('MonthlyFeesPaymentComponent', () => {
  let component: MonthlyFeesPaymentComponent;
  let fixture: ComponentFixture<MonthlyFeesPaymentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MonthlyFeesPaymentComponent]
    });
    fixture = TestBed.createComponent(MonthlyFeesPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
});
