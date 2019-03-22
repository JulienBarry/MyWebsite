import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentGespraecheComponent } from './content-gespraeche.component';

describe('ContentGespraecheComponent', () => {
  let component: ContentGespraecheComponent;
  let fixture: ComponentFixture<ContentGespraecheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentGespraecheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentGespraecheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
