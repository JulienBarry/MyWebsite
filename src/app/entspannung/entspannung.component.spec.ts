import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntspannungComponent } from './entspannung.component';

describe('EntspannungComponent', () => {
  let component: EntspannungComponent;
  let fixture: ComponentFixture<EntspannungComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntspannungComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntspannungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
