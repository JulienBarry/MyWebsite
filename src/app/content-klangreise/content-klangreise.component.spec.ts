import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentKlangreiseComponent } from './content-klangreise.component';

describe('ContentKlangreiseComponent', () => {
  let component: ContentKlangreiseComponent;
  let fixture: ComponentFixture<ContentKlangreiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentKlangreiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentKlangreiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
