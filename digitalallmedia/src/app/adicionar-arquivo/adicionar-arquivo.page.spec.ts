import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdicionarArquivoPage } from './adicionar-arquivo.page';

describe('AdicionarArquivoPage', () => {
  let component: AdicionarArquivoPage;
  let fixture: ComponentFixture<AdicionarArquivoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionarArquivoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
