import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StorageService } from 'src/services/storage.service';

@Component({
  selector: 'app-criar-album',
  templateUrl: './criar-album.page.html',
  styleUrls: ['./criar-album.page.scss'],
  standalone: false,
})
export class CriarAlbumPage implements OnInit {
  albumForm: FormGroup;
  musicaSelecionada: string = '';
  mostrarPesquisa = false;
  textoPesquisa = '';
  ficheirosSelecionados: any[] = [];
  ficheirosFiltrados: any[] = [];
  sucesso = false;

  categoriasDisponiveis: string[] = [];

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private storageService: StorageService
  ) {
    this.albumForm = this.fb.group({
      albumName: ['', Validators.required],
      albumDescription: [''],
      albumCategory: ['']
    });
  }

  ngOnInit(): void {
    const nav = this.router.getCurrentNavigation();
    const state = nav?.extras?.state;

    if (state && Array.isArray(state['ficheiros']) && state['ficheiros'].length > 0) {
      this.ficheirosSelecionados = state['ficheiros'];
      this.ficheirosFiltrados = [...this.ficheirosSelecionados];
      localStorage.setItem('fotosSelecionadasTemp', JSON.stringify(this.ficheirosSelecionados));
    } else {
      const fotosTemp = localStorage.getItem('fotosSelecionadasTemp');
      if (fotosTemp) {
        this.ficheirosSelecionados = JSON.parse(fotosTemp);
        this.ficheirosFiltrados = [...this.ficheirosSelecionados];
      } else {
        this.resetarFormulario();
      }
    }

    const categoriasFixasExtras = ['Art', 'Nature', 'Animals','Beauty','Friends','Family',];

    fetch('/assets/data.json')
      .then(res => res.json())
      .then((albuns: any[]) => {
        const categoriasDataJson = albuns.map(album => album.categoria).filter(Boolean);
        const todasCategorias = [...new Set([...categoriasDataJson, ...categoriasFixasExtras])];
        this.categoriasDisponiveis = todasCategorias;
      });

    this.albumForm.get('albumName')?.valueChanges.subscribe(value => {
      const desc = this.albumForm.get('albumDescription');
      if (value && value.trim() !== '') {
        desc?.enable({ emitEvent: false });
      } else {
        desc?.disable({ emitEvent: false });
      }
    });

    this.albumForm.get('albumDescription')?.disable({ emitEvent: false });
  }

  ionViewWillEnter() {
    const musica = localStorage.getItem('musicaSelecionada');
    if (musica) {
      const musicaObj = JSON.parse(musica);
      this.musicaSelecionada = musicaObj?.titulo || '';
    } else {
      this.musicaSelecionada = '';
    }
  }

  adicionarMusica() {
    this.router.navigate(['/escolher-musica']);
  }

  editarFotos() {
    localStorage.setItem('fotosSelecionadasTemp', JSON.stringify(this.ficheirosSelecionados));
    this.router.navigate(['/selecionar-ficheiros']);
  }

  isSaveDisabled(): boolean {
    return (
      this.albumForm.get('albumName')?.invalid ||
      this.ficheirosSelecionados.length === 0
    );
  }

  async guardarAlbum() {
    if (this.isSaveDisabled()) {
      this.albumForm.markAllAsTouched();
      return;
    }

    const capa = this.ficheirosSelecionados[0]?.caminho || 'assets/default-album.jpg';

    const novoAlbum = {
      titulo: this.albumForm.value.albumName,
      descricao: this.albumForm.value.albumDescription,
      categoria: this.albumForm.value.albumCategory,
      tags: [this.albumForm.value.albumName.toLowerCase()],
      data: new Date().toISOString().split('T')[0],
      local: 'Desconhecido',
      tipo: 'album',
      ficheiro: capa
    };

    await this.storageService.guardarAlbum(novoAlbum);

    this.limparDadosTemporarios();
    this.sucesso = true;
  }

  fecharMensagem() {
    this.sucesso = false;
    this.router.navigate(['/meus-albuns']);
  }

  cancelar() {
    this.limparDadosTemporarios();
    this.router.navigate(['/tabs']);
  }

  limparDadosTemporarios() {
    localStorage.removeItem('fotosSelecionadasTemp');
    localStorage.removeItem('musicaSelecionada');
    this.resetarFormulario();
  }

  resetarFormulario() {
    this.albumForm.reset();
    this.ficheirosSelecionados = [];
    this.ficheirosFiltrados = [];
    this.musicaSelecionada = '';
    this.sucesso = false;
  }

  filtrarFicheiros() {
    const termo = this.textoPesquisa.toLowerCase();
    this.ficheirosFiltrados = this.ficheirosSelecionados.filter((f: any) =>
      (f.nome || '').toLowerCase().includes(termo)
    );
  }
}
