import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GespraecheComponent } from './gespraeche.component';

describe('GespraecheComponent', () => {
  let component: GespraecheComponent;
  let fixture: ComponentFixture<GespraecheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GespraecheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GespraecheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
