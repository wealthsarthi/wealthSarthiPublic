import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxCalculatorStepperComponent } from './tax-calculator-stepper.component';

describe('TaxCalculatorStepperComponent', () => {
  let component: TaxCalculatorStepperComponent;
  let fixture: ComponentFixture<TaxCalculatorStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaxCalculatorStepperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaxCalculatorStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
