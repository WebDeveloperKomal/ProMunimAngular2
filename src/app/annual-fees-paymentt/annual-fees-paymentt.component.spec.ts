import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnualFeesPaymenttComponent } from './annual-fees-paymentt.component';

describe('AnnualFeesPaymenttComponent', () => {
  let component: AnnualFeesPaymenttComponent;
  let fixture: ComponentFixture<AnnualFeesPaymenttComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnnualFeesPaymenttComponent]
    });
    fixture = TestBed.createComponent(AnnualFeesPaymenttComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
