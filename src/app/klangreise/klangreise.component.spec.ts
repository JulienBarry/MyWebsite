import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KlangreiseComponent } from './klangreise.component';

describe('KlangreiseComponent', () => {
  let component: KlangreiseComponent;
  let fixture: ComponentFixture<KlangreiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KlangreiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KlangreiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
