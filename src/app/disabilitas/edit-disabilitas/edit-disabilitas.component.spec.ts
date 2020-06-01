import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDisabilitasComponent } from './edit-disabilitas.component';

describe('EditDisabilitasComponent', () => {
  let component: EditDisabilitasComponent;
  let fixture: ComponentFixture<EditDisabilitasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDisabilitasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDisabilitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
