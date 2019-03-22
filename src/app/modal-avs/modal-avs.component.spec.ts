import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAVSComponent } from './modal-avs.component';

describe('ModalAVSComponent', () => {
  let component: ModalAVSComponent;
  let fixture: ComponentFixture<ModalAVSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalAVSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAVSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
