import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrewOverviewComponent } from './brew-overview.component';

describe('BrewOverviewComponent', () => {
  let component: BrewOverviewComponent;
  let fixture: ComponentFixture<BrewOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrewOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrewOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
