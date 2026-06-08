import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Blusas } from './blusas';

describe('Blusas', () => {
  let component: Blusas;
  let fixture: ComponentFixture<Blusas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Blusas],
    }).compileComponents();

    fixture = TestBed.createComponent(Blusas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
