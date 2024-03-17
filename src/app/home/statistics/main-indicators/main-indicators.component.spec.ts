import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainIndicatorsComponent } from './main-indicators.component';

describe('MainIndicatorsComponent', () => {
  let component: MainIndicatorsComponent;
  let fixture: ComponentFixture<MainIndicatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainIndicatorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainIndicatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
