import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfirmarEncomendaPage } from './confirmar-encomenda.page';

describe('ConfirmarEncomendaPage', () => {
  let component: ConfirmarEncomendaPage;
  let fixture: ComponentFixture<ConfirmarEncomendaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmarEncomendaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
