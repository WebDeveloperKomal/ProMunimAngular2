import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayInSlipsComponent } from './pay-in-slips.component';

describe('PayInSlipsComponent', () => {
  let component: PayInSlipsComponent;
  let fixture: ComponentFixture<PayInSlipsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PayInSlipsComponent]
    });
    fixture = TestBed.createComponent(PayInSlipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
