import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherFeesPaymentComponent } from './other-fees-payment.component';

describe('OtherFeesPaymentComponent', () => {
  let component: OtherFeesPaymentComponent;
  let fixture: ComponentFixture<OtherFeesPaymentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OtherFeesPaymentComponent]
    });
    fixture = TestBed.createComponent(OtherFeesPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
