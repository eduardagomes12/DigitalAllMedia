import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/services/storage.service';

@Component({
  selector: 'app-meus-albuns',
  templateUrl: './meus-albuns.page.html',
  styleUrls: ['./meus-albuns.page.scss'],
  standalone: false,
})
export class MeusAlbunsPage {
  mostrarMenu = false;
  albuns: any[] = [];

  constructor(
    private router: Router,
    private storageService: StorageService
  ) {}

  ionViewWillEnter() {
    this.carregarAlbuns();
  }

 async carregarAlbuns() {
  const dinamicos = await this.storageService.buscarAlbuns();

  const fixos = [
    { nome: 'Bélgica', imagem: 'assets/images/belgica.jpg' },
    { nome: 'México', imagem: 'assets/images/praia.jpg' },
    { nome: 'Porto', imagem: 'assets/images/porto.jpg' }
  ];
  
  const dinamicosFormatados = dinamicos.map(a => ({
    nome: a.titulo,
    imagem: a.ficheiro || 'assets/default-album.jpg'
  }));

  this.albuns = [...dinamicosFormatados, ...fixos];
}

  toggleMenu() {
    this.mostrarMenu = !this.mostrarMenu;
  }

  abrirCriarAlbum() {
    this.router.navigate(['/selecionar-ficheiros']);
  }
}
