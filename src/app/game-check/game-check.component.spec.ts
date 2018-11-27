import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameCheckComponent } from './game-check.component';

describe('GameCheckComponent', () => {
  let component: GameCheckComponent;
  let fixture: ComponentFixture<GameCheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameCheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
