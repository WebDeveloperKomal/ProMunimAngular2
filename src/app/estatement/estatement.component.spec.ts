import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EStatementComponent } from './estatement.component';

describe('EStatementComponent', () => {
  let component: EStatementComponent;
  let fixture: ComponentFixture<EStatementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EStatementComponent]
    });
    fixture = TestBed.createComponent(EStatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
