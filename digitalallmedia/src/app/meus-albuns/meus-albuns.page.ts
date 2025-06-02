import { Component } from '@angular/core';
import { Router } from '@angular/router'; // <-- IMPORTAÇÃO ADICIONADA

@Component({
  selector: 'app-meus-albuns',
  templateUrl: './meus-albuns.page.html',
  styleUrls: ['./meus-albuns.page.scss'],
  standalone: false,
})
export class MeusAlbunsPage {

  mostrarMenu = false;

  albuns = [
    { nome: 'Bélgica', imagem: 'assets/images/belgica.jpg' },
    { nome: 'México', imagem: 'assets/images/praia.jpg' },
    { nome: 'Porto', imagem: 'assets/images/porto.jpg' }
  ];

  constructor(private router: Router) {} // <-- INJETADO NO CONSTRUTOR

  toggleMenu() {
    this.mostrarMenu = !this.mostrarMenu;
  }

  abrirCriarAlbum() {
    this.router.navigate(['/selecionar-ficheiros']); // <-- Certifica-te que esta rota existe
  }
}
