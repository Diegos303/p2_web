import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelasMenuProtudoAcessorio } from './telas-menu-protudo-acessorio';

describe('TelasMenuProtudoAcessorio', () => {
  let component: TelasMenuProtudoAcessorio;
  let fixture: ComponentFixture<TelasMenuProtudoAcessorio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TelasMenuProtudoAcessorio],
    }).compileComponents();

    fixture = TestBed.createComponent(TelasMenuProtudoAcessorio);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
