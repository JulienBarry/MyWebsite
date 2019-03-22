import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentInspirationComponent } from './content-inspiration.component';

describe('ContentInspirationComponent', () => {
  let component: ContentInspirationComponent;
  let fixture: ComponentFixture<ContentInspirationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentInspirationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentInspirationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
