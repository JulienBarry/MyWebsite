import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentErnaehrungComponent } from './content-ernaehrung.component';

describe('ContentErnaehrungComponent', () => {
  let component: ContentErnaehrungComponent;
  let fixture: ComponentFixture<ContentErnaehrungComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentErnaehrungComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentErnaehrungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
