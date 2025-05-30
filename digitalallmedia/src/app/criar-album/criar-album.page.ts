import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-album',
  templateUrl: './criar-album.page.html',
  styleUrls: ['./criar-album.page.scss'],
  standalone: false,
})
export class CriarAlbumPage {
  albumName: string = '';
  albumDescription: string = '';
  musicaSelecionada: string = '';
  mostrarPesquisa = false;
  textoPesquisa = '';

  ficheirosSelecionados: any[] = [];
  ficheirosFiltrados: any[] = [];

  constructor(private router: Router) {
    const nav = this.router.getCurrentNavigation();
    if (nav?.extras?.state?.['ficheiros']) {
      this.ficheirosSelecionados = nav.extras.state['ficheiros'];
      this.ficheirosFiltrados = [...this.ficheirosSelecionados];
    }
  }

  adicionarMusica() {
    console.log('Abrir modal ou página de seleção de música...');
  }

  guardarAlbum() {
    if (!this.albumName) {
      alert('Please enter an album name.');
      return;
    }

    console.log('Álbum criado:', {
      nome: this.albumName,
      descricao: this.albumDescription,
      musica: this.musicaSelecionada,
      ficheiros: this.ficheirosSelecionados
    });

    alert('Album created successfully!');
    this.router.navigate(['/']);
  }

  cancelar() {
    this.router.navigate(['/selecionar-ficheiros']);
  }

  filtrarFicheiros() {
    const termo = this.textoPesquisa.toLowerCase();
    this.ficheirosFiltrados = this.ficheirosSelecionados.filter(f =>
      (f.nome || '').toLowerCase().includes(termo)
    );
  }
}
