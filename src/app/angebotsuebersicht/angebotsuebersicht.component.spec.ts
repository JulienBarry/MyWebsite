import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngebotsuebersichtComponent } from './angebotsuebersicht.component';

describe('AngebotsuebersichtComponent', () => {
  let component: AngebotsuebersichtComponent;
  let fixture: ComponentFixture<AngebotsuebersichtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngebotsuebersichtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngebotsuebersichtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
