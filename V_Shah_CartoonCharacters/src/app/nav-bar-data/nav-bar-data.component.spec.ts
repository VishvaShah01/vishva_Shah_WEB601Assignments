import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarDataComponent } from './nav-bar-data.component';

describe('NavBarDataComponent', () => {
  let component: NavBarDataComponent;
  let fixture: ComponentFixture<NavBarDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBarDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
