import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataupdatebuttonComponent } from './dataupdatebutton.component';

describe('DataupdatebuttonComponent', () => {
  let component: DataupdatebuttonComponent;
  let fixture: ComponentFixture<DataupdatebuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataupdatebuttonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataupdatebuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
