import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteresComponent } from './interes.component';

describe('InteresComponent', () => {
  let component: InteresComponent;
  let fixture: ComponentFixture<InteresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InteresComponent],
    });
    fixture = TestBed.createComponent(InteresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
