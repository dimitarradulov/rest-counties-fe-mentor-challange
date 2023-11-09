import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LightModeButtonComponent } from './light-mode-button.component';

describe('LightModeButtonComponent', () => {
  let component: LightModeButtonComponent;
  let fixture: ComponentFixture<LightModeButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LightModeButtonComponent]
    });
    fixture = TestBed.createComponent(LightModeButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
