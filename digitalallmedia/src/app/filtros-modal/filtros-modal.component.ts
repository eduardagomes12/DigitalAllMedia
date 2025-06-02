import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SearchService } from 'src/services/search.service';

@Component({
  selector: 'app-filtros-modal',
  templateUrl: './filtros-modal.component.html',
  styleUrls: ['./filtros-modal.component.scss'],
  standalone: false,
})
export class FiltrosModalComponent implements OnInit {
  tags: string = '';
  categoria: string = '';
  data: string = '';
  categoriasDisponiveis: string[] = [];

  constructor(
    private modalCtrl: ModalController,
    private searchService: SearchService
  ) {}

  ngOnInit(): void {
    this.searchService.pesquisar('').subscribe(albuns => {
      const categoriasDosAlbuns = albuns.map(a => a.categoria).filter(Boolean);

      const categoriasSalvas = localStorage.getItem('categorias');
      const categoriasLocais = categoriasSalvas ? JSON.parse(categoriasSalvas) : [];

      const todasCategorias = [...categoriasDosAlbuns, ...categoriasLocais];
      this.categoriasDisponiveis = Array.from(new Set(todasCategorias));
    });
  }

  fechar(): void {
    this.modalCtrl.dismiss();
  }

  limpar(): void {
    this.tags = '';
    this.categoria = '';
    this.data = '';
  }

  aplicar(): void {
    const filtros = {
      tags: this.tags,
      categoria: this.categoria,
      data: this.data
    };
    this.modalCtrl.dismiss(filtros);
  }
}
