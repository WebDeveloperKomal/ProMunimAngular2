import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayGstComponent } from './pay-gst.component';

describe('PayGstComponent', () => {
  let component: PayGstComponent;
  let fixture: ComponentFixture<PayGstComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PayGstComponent]
    });
    fixture = TestBed.createComponent(PayGstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
