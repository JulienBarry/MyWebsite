import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersoenlichesComponent } from './persoenliches.component';

describe('PersoenlichesComponent', () => {
  let component: PersoenlichesComponent;
  let fixture: ComponentFixture<PersoenlichesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersoenlichesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersoenlichesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
