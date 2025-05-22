import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SelecionarFicheirosPage } from './selecionar-ficheiros.page';

describe('SelecionarFicheirosPage', () => {
  let component: SelecionarFicheirosPage;
  let fixture: ComponentFixture<SelecionarFicheirosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SelecionarFicheirosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
