import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Calcas } from './calcas';

describe('Calcas', () => {
  let component: Calcas;
  let fixture: ComponentFixture<Calcas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Calcas],
    }).compileComponents();

    fixture = TestBed.createComponent(Calcas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
