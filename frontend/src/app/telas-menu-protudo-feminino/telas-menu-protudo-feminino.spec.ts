import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelasMenuProtudoFeminino } from './telas-menu-protudo-feminino';

describe('TelasMenuProtudoFeminino', () => {
  let component: TelasMenuProtudoFeminino;
  let fixture: ComponentFixture<TelasMenuProtudoFeminino>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TelasMenuProtudoFeminino],
    }).compileComponents();

    fixture = TestBed.createComponent(TelasMenuProtudoFeminino);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
