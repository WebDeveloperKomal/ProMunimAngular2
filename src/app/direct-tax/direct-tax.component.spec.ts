import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectTaxComponent } from './direct-tax.component';

describe('DirectTaxComponent', () => {
  let component: DirectTaxComponent;
  let fixture: ComponentFixture<DirectTaxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DirectTaxComponent]
    });
    fixture = TestBed.createComponent(DirectTaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
