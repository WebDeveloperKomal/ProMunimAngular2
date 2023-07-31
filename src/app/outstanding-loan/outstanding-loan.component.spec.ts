import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutstandingLoanComponent } from './outstanding-loan.component';

describe('OutstandingLoanComponent', () => {
  let component: OutstandingLoanComponent;
  let fixture: ComponentFixture<OutstandingLoanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OutstandingLoanComponent]
    });
    fixture = TestBed.createComponent(OutstandingLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
