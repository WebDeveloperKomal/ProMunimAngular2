import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChequebookRecordsComponent } from './chequebook-records.component';

describe('ChequebookRecordsComponent', () => {
  let component: ChequebookRecordsComponent;
  let fixture: ComponentFixture<ChequebookRecordsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChequebookRecordsComponent]
    });
    fixture = TestBed.createComponent(ChequebookRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
