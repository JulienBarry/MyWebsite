import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnAnmeldungComponent } from './btn-anmeldung.component';

describe('BtnAnmeldungComponent', () => {
  let component: BtnAnmeldungComponent;
  let fixture: ComponentFixture<BtnAnmeldungComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtnAnmeldungComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnAnmeldungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
