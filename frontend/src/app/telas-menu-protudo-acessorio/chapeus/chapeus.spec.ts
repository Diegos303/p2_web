import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chapeus } from './chapeus';

describe('Chapeus', () => {
  let component: Chapeus;
  let fixture: ComponentFixture<Chapeus>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Chapeus],
    }).compileComponents();

    fixture = TestBed.createComponent(Chapeus);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
