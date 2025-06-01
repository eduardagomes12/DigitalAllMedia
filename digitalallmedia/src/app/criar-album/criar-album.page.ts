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

  constructor(private router: Router, private fb: FormBuilder, private storageService: StorageService) {
    this.albumForm = this.fb.group({
      albumName: ['', Validators.required],
      albumDescription: ['']
    });
  }

  ngOnInit(): void {
    const nav = this.router.getCurrentNavigation();
    const state = nav?.extras?.state;

    // ✅ Safe and clean access to "ficheiros"
    if (state && Array.isArray(state['ficheiros']) && state['ficheiros'].length > 0) {
      this.ficheirosSelecionados = state['ficheiros'];
      this.ficheirosFiltrados = [...this.ficheirosSelecionados];
    }

    // ✅ Safe and correct access to music from localStorage
    const musica = localStorage.getItem('musicaSelecionada');
    if (musica) {
      const musicaObj = JSON.parse(musica);
      this.musicaSelecionada = musicaObj?.titulo || '';
    }
  }

  adicionarMusica() {
    this.router.navigate(['/escolher-musica']);
  }

  async guardarAlbum() {
  if (this.albumForm.invalid) {
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

  alert('Álbum criado com sucesso!');
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
