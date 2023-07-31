import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerKYCComponent } from './customer-kyc.component';

describe('CustomerKYCComponent', () => {
  let component: CustomerKYCComponent;
  let fixture: ComponentFixture<CustomerKYCComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerKYCComponent]
    });
    fixture = TestBed.createComponent(CustomerKYCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
