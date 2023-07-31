import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GstinReportComponent } from './gstin-report.component';

describe('GstinReportComponent', () => {
  let component: GstinReportComponent;
  let fixture: ComponentFixture<GstinReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GstinReportComponent]
    });
    fixture = TestBed.createComponent(GstinReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
