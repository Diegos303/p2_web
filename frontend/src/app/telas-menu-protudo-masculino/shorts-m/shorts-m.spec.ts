import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortsM } from './shorts-m';

describe('ShortsM', () => {
  let component: ShortsM;
  let fixture: ComponentFixture<ShortsM>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShortsM],
    }).compileComponents();

    fixture = TestBed.createComponent(ShortsM);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
