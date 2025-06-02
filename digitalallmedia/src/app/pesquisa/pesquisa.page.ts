import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { SearchService } from 'src/services/search.service';

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.page.html',
  styleUrls: ['./pesquisa.page.scss'],
  standalone: false,
})
export class PesquisaPage {
  query: string = '';
  sugestoesFiltradas: any[] = [];
  historico: string[] = [];
  vistosRecentemente: any[] = [];
  todosAlbuns: any[] = [];
  pesquisando: boolean = false;

  mostrarCaixaFiltros: boolean = false;
  filtroData: string = '';
  filtroCategoria: string = '';
  categoriasDisponiveis: string[] = [];

  constructor(
    private searchService: SearchService,
    private router: Router,
    private modalCtrl: ModalController
  ) {}

  ionViewWillEnter() {
    this.query = '';
    this.pesquisando = false;
    this.sugestoesFiltradas = [];
    this.historico = [];
    this.vistosRecentemente = [];

    this.searchService.pesquisar('').subscribe(albuns => {
      this.todosAlbuns = albuns;

      const categoriasSalvas = localStorage.getItem('categorias');
      const categoriasLocais = categoriasSalvas ? JSON.parse(categoriasSalvas) : [];

      const categoriasDosAlbuns = albuns.map(a => a.categoria).filter(Boolean);
      const todasCategorias = [...categoriasDosAlbuns, ...categoriasLocais];
      this.categoriasDisponiveis = Array.from(new Set(todasCategorias));
    });
  }

  ionViewDidLeave() {
    this.query = '';
    this.pesquisando = false;
    this.sugestoesFiltradas = [];
    this.historico = [];
    this.vistosRecentemente = [];
  }

  filtrarSugestoes() {
    const termo = this.query.trim().toLowerCase();
    this.pesquisando = termo.length > 0;

    if (this.pesquisando) {
      const historico = localStorage.getItem('historicoPesquisa');
      const vistos = localStorage.getItem('vistosRecentemente');

      this.historico = historico ? JSON.parse(historico) : [];
      const vistosParsed = vistos ? JSON.parse(vistos) : [];
      this.vistosRecentemente = vistosParsed.length > 0 ? vistosParsed : [];
    } else {
      this.historico = [];
      this.vistosRecentemente = [];
    }

    this.sugestoesFiltradas = termo.length > 0
      ? this.todosAlbuns.filter(album =>
          album.titulo.toLowerCase().includes(termo)
        )
      : [];
  }

  mostrarRecentemente() {
    this.query = '';
    this.sugestoesFiltradas = [];
    this.pesquisando = false;
  }

  confirmarPesquisa() {
    const termo = this.query.trim().toLowerCase();
    if (!termo) return;

    const historico = this.carregarHistorico();

    if (!historico.includes(termo)) {
      historico.unshift(termo);
      if (historico.length > 3) historico.pop();
      localStorage.setItem('historicoPesquisa', JSON.stringify(historico));
      localStorage.setItem('primeiroAcesso', 'false');
    }

    this.historico = historico;
  }

  abrirAlbum(album: any) {
    this.confirmarPesquisa();
    this.salvarVistoRecentemente(album);
    this.pesquisando = false;
    this.query = '';
    this.sugestoesFiltradas = [];
    this.router.navigate(['/album-detalhes'], {
      state: { album }
    });
  }

  selecionarHistorico(termo: string) {
    this.query = termo;
    this.filtrarSugestoes();
  }

  limparHistorico() {
    this.historico = [];
    localStorage.removeItem('historicoPesquisa');
  }

  carregarHistorico(): string[] {
    return JSON.parse(localStorage.getItem('historicoPesquisa') || '[]');
  }

  salvarVistoRecentemente(album: any) {
    const ultimo = [album];
    localStorage.setItem('vistosRecentemente', JSON.stringify(ultimo));
    this.vistosRecentemente = ultimo;
  }

  toggleCaixaFiltros() {
    this.mostrarCaixaFiltros = !this.mostrarCaixaFiltros;
  }

  aplicarFiltrosInline() {
    let resultados = [...this.todosAlbuns];

    if (this.filtroCategoria) {
      resultados = resultados.filter(album =>
        album.categoria === this.filtroCategoria
      );
    }

    if (this.filtroData === 'recent') {
      resultados.sort((a, b) => b.data.localeCompare(a.data));
    } else if (this.filtroData === 'oldest') {
      resultados.sort((a, b) => a.data.localeCompare(b.data));
    }

    this.sugestoesFiltradas = resultados;
    this.pesquisando = true;
    this.mostrarCaixaFiltros = false;
  }
}
