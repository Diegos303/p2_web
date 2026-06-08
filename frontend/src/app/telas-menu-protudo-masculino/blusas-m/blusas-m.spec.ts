import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlusasM } from './blusas-m';

describe('BlusasM', () => {
  let component: BlusasM;
  let fixture: ComponentFixture<BlusasM>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlusasM],
    }).compileComponents();

    fixture = TestBed.createComponent(BlusasM);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
