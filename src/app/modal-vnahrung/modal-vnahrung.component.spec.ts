import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalVNahrungComponent } from './modal-vnahrung.component';

describe('ModalVNahrungComponent', () => {
  let component: ModalVNahrungComponent;
  let fixture: ComponentFixture<ModalVNahrungComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalVNahrungComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalVNahrungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
