import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-escolher-musica',
  templateUrl: './escolher-musica.page.html',
  styleUrls: ['./escolher-musica.page.scss'],
  standalone: false,
})
export class EscolherMusicaPage {
  searchTerm = '';
  abaAtual = 'default';
  musicaAtual: any = null;
  audioAtual: HTMLAudioElement | null = null;

  musicasSelecionadas: any[] = [];
  musicasFiltradas: any[] = [];
  musicasSalvas: any[] = [];

  musicas = [
    { titulo: 'Energetic Rock', arquivo: 'energetic-rock-333526.mp3' },
    { titulo: 'Fun Energetic Rock', arquivo: 'fun-energetic-rock-music-334319.mp3' },
    { titulo: 'Lo-fi Background', arquivo: 'lofi-background-music-337568 (1).mp3' },
    { titulo: 'Calm Nature', arquivo: 'soft-calm-background-music-346811.mp3' },
    { titulo: 'Instrumental', arquivo: 'background-music-instrumental-207886.mp3' },
    { titulo: 'Happy Kids', arquivo: 'happy-kids-background-music-337259.mp3' },
    { titulo: 'Whip Afro', arquivo: 'whip-afro-dancehall-music-110235.mp3' }
  ];

  constructor(private router: Router) {
    this.filtrarMusicas();
  }

  trocarAba(aba: string) {
    this.abaAtual = aba || 'default';
    this.filtrarMusicas();
  }

  filtrarMusicas() {
    const base = this.abaAtual === 'saved' ? this.musicasSalvas : this.musicas;
    const termo = this.searchTerm.toLowerCase();
    this.musicasFiltradas = base.filter((m: any) =>
      m.titulo.toLowerCase().includes(termo)
    );
  }

  adicionarAoSaved(musica: any) {
    const jaSalva = this.musicasSalvas.find(m => m.titulo === musica.titulo);
    if (!jaSalva) {
      this.musicasSalvas.push(musica);
    }
  }

  estaSelecionada(musica: any): boolean {
    return this.musicasSelecionadas.length > 0 &&
           this.musicasSelecionadas[0].titulo === musica.titulo;
  }

  selecionarMusica(musica: any) {
    if (!this.musicasSalvas.includes(musica)) return;
    this.musicasSelecionadas = [musica];
  }

  removerMusica(musica: any) {
    this.musicasSalvas = this.musicasSalvas.filter(m => m !== musica);
    this.musicasSelecionadas = this.musicasSelecionadas.filter(m => m !== musica);
    localStorage.removeItem('musicaSelecionada');
    this.filtrarMusicas();
  }

  guardarMusica() {
    if (this.musicasSelecionadas.length === 0) return;
    const musica = this.musicasSelecionadas[0];
    localStorage.setItem('musicaSelecionada', JSON.stringify(musica));

    const ficheiros = JSON.parse(localStorage.getItem('fotosSelecionadasTemp') || '[]');
    this.router.navigate(['/criar-album'], {
      state: { ficheiros }
    });
  }

  togglePreview(musica: any) {
    if (this.musicaAtual === musica && this.audioAtual) {
      this.audioAtual.pause();
      this.audioAtual = null;
      this.musicaAtual = null;
    } else {
      if (this.audioAtual) {
        this.audioAtual.pause();
      }
      const audio = new Audio(`assets/music/${musica.arquivo}`);
      this.audioAtual = audio;
      this.musicaAtual = musica;
      audio.play();

      setTimeout(() => {
        if (this.audioAtual === audio) {
          audio.pause();
          this.audioAtual = null;
          this.musicaAtual = null;
        }
      }, 15000);
    }
  }
}