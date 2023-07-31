import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GSTNBulkUploadComponent } from './gstnbulk-upload.component';

describe('GSTNBulkUploadComponent', () => {
  let component: GSTNBulkUploadComponent;
  let fixture: ComponentFixture<GSTNBulkUploadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GSTNBulkUploadComponent]
    });
    fixture = TestBed.createComponent(GSTNBulkUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
