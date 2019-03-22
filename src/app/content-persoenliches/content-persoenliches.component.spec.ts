import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentPersoenlichesComponent } from './content-persoenliches.component';

describe('ContentPersoenlichesComponent', () => {
  let component: ContentPersoenlichesComponent;
  let fixture: ComponentFixture<ContentPersoenlichesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentPersoenlichesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentPersoenlichesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
