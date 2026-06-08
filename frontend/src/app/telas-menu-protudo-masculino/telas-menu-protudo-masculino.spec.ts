import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelasMenuProtudoMasculino } from './telas-menu-protudo-masculino';

describe('TelasMenuProtudoMasculino', () => {
  let component: TelasMenuProtudoMasculino;
  let fixture: ComponentFixture<TelasMenuProtudoMasculino>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TelasMenuProtudoMasculino],
    }).compileComponents();

    fixture = TestBed.createComponent(TelasMenuProtudoMasculino);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
