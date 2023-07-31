import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StateTaxComponent } from './state-tax.component';

describe('StateTaxComponent', () => {
  let component: StateTaxComponent;
  let fixture: ComponentFixture<StateTaxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StateTaxComponent]
    });
    fixture = TestBed.createComponent(StateTaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
