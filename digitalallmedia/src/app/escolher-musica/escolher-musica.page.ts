import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-escolher-musica',
  templateUrl: './escolher-musica.page.html',
  styleUrls: ['./escolher-musica.page.scss'],
  standalone:false,
})
export class EscolherMusicaPage {
musicas = [
  { titulo: 'High Tide', imagem: 'capa1.png' },
  { titulo: 'Paper Moon', imagem: 'capa2.png' },
  { titulo: 'Dreams Tonite', imagem: 'capa3.png' },
  { titulo: 'Coffee', imagem: 'capa4.png' },
  { titulo: 'Japanese Denim', imagem: 'capa5.png' },
  { titulo: 'Lover is a Day', imagem: 'capa6.png' },
  { titulo: 'Your Best American Girl', imagem: 'capa7.png' },
  { titulo: 'Night trouble', imagem: 'capa8.png' }
];

  constructor(private router: Router) {}

  cancelar() {
    this.router.navigate(['/criar-album']);
  }
}
