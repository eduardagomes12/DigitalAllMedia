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

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private storageService: StorageService
  ) {
    this.albumForm = this.fb.group({
      albumName: ['', Validators.required],
      albumDescription: ['']
    });
  }

  ngOnInit(): void {
    // Limpa estado anterior
    this.albumForm.reset();
    this.ficheirosSelecionados = [];
    this.ficheirosFiltrados = [];
    this.sucesso = false;

    const nav = this.router.getCurrentNavigation();
    const state = nav?.extras?.state;

    if (state && Array.isArray(state['ficheiros']) && state['ficheiros'].length > 0) {
      this.ficheirosSelecionados = state['ficheiros'];
      this.ficheirosFiltrados = [...this.ficheirosSelecionados];
    }

    const musica = localStorage.getItem('musicaSelecionada');
    if (musica) {
      const musicaObj = JSON.parse(musica);
      this.musicaSelecionada = musicaObj?.titulo || '';
    }

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

  adicionarMusica() {
    this.router.navigate(['/escolher-musica']);
  }

  editarFotos() {
    this.router.navigate(['/selecionar-ficheiros']);
  }

  isSaveDisabled(): boolean {
    return (
      this.albumForm.invalid ||
      this.ficheirosSelecionados.length === 0
    );
  }

  async guardarAlbum() {
    if (this.isSaveDisabled()) {
      this.albumForm.markAllAsTouched();
      return;
    }

    const novoAlbum = {
      titulo: this.albumForm.value.albumName,
      descricao: this.albumForm.value.albumDescription,
      tags: [this.albumForm.value.albumName.toLowerCase()],
      data: new Date().toISOString().split('T')[0],
      local: 'Desconhecido',
      tipo: 'album',
      ficheiro: 'assets/default-album.jpg'
    };

    await this.storageService.guardarAlbum(novoAlbum);
    this.sucesso = true;
  }

  fecharMensagem() {
    this.sucesso = false;
    this.router.navigate(['/tabs']);
  }

  cancelar() {
    this.router.navigate(['/tabs']);
  }

  filtrarFicheiros() {
    const termo = this.textoPesquisa.toLowerCase();
    this.ficheirosFiltrados = this.ficheirosSelecionados.filter((f: any) =>
      (f.nome || '').toLowerCase().includes(termo)
    );
  }
}
