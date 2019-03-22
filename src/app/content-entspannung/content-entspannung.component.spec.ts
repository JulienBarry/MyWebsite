import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentEntspannungComponent } from './content-entspannung.component';

describe('ContentEntspannungComponent', () => {
  let component: ContentEntspannungComponent;
  let fixture: ComponentFixture<ContentEntspannungComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentEntspannungComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentEntspannungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
