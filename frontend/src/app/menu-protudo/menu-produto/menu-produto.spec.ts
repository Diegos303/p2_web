import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuProduto } from './menu-produto';

describe('MenuProduto', () => {
  let component: MenuProduto;
  let fixture: ComponentFixture<MenuProduto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuProduto],
    }).compileComponents();

    fixture = TestBed.createComponent(MenuProduto);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
