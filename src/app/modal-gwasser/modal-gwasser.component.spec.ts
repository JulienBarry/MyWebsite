import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalGWasserComponent } from './modal-gwasser.component';

describe('ModalGWasserComponent', () => {
  let component: ModalGWasserComponent;
  let fixture: ComponentFixture<ModalGWasserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalGWasserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalGWasserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
