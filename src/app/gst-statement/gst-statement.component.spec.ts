import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GstStatementComponent } from './gst-statement.component';

describe('GstStatementComponent', () => {
  let component: GstStatementComponent;
  let fixture: ComponentFixture<GstStatementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GstStatementComponent]
    });
    fixture = TestBed.createComponent(GstStatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
