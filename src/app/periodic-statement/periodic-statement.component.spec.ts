import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodicStatementComponent } from './periodic-statement.component';

describe('PeriodicStatementComponent', () => {
  let component: PeriodicStatementComponent;
  let fixture: ComponentFixture<PeriodicStatementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PeriodicStatementComponent]
    });
    fixture = TestBed.createComponent(PeriodicStatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
