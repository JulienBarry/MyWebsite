import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErnaehrungComponent } from './ernaehrung.component';

describe('ErnaehrungComponent', () => {
  let component: ErnaehrungComponent;
  let fixture: ComponentFixture<ErnaehrungComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErnaehrungComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErnaehrungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
