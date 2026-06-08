import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CamisetasM } from './camisetas-m';

describe('CamisetasM', () => {
  let component: CamisetasM;
  let fixture: ComponentFixture<CamisetasM>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CamisetasM],
    }).compileComponents();

    fixture = TestBed.createComponent(CamisetasM);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
