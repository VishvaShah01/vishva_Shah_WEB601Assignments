import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentCardComponent } from './content-card.component';

//import { HighlightImportantDataDirective } from '../highlight-important-data.directive';
describe('ContentCardComponent', () => {
  let component: ContentCardComponent;
  let fixture: ComponentFixture<ContentCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
