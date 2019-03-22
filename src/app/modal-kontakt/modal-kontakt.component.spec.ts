import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalKontaktComponent } from './modal-kontakt.component';

describe('ModalKontaktComponent', () => {
  let component: ModalKontaktComponent;
  let fixture: ComponentFixture<ModalKontaktComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalKontaktComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalKontaktComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
