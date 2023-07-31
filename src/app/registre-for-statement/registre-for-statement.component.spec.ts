import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistreForStatementComponent } from './registre-for-statement.component';

describe('RegistreForStatementComponent', () => {
  let component: RegistreForStatementComponent;
  let fixture: ComponentFixture<RegistreForStatementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistreForStatementComponent]
    });
    fixture = TestBed.createComponent(RegistreForStatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
