import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrewContactComponent } from './brew-contact.component';

describe('BrewContactComponent', () => {
  let component: BrewContactComponent;
  let fixture: ComponentFixture<BrewContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrewContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrewContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
