import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocOutstandingLoanComponent } from './doc-outstanding-loan.component';

describe('DocOutstandingLoanComponent', () => {
  let component: DocOutstandingLoanComponent;
  let fixture: ComponentFixture<DocOutstandingLoanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DocOutstandingLoanComponent]
    });
    fixture = TestBed.createComponent(DocOutstandingLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
