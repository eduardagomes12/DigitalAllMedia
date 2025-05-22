import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-selecionar-ficheiros',
  templateUrl: './selecionar-ficheiros.page.html',
  styleUrls: ['./selecionar-ficheiros.page.scss'],
  standalone: false,
})
export class SelecionarFicheirosPage {

  segmento = 'recentes';

  ficheiros = [
    { thumbnail: 'assets/images/foto1.jpg', duracao: '00:50', selecionado: false },
    { thumbnail: 'assets/images/foto2.jpg', duracao: '00:59', selecionado: false },
    { thumbnail: 'assets/images/foto3.jpg', duracao: '01:10', selecionado: false },
    { thumbnail: 'assets/images/foto4.jpg', selecionado: false },
    { thumbnail: 'assets/images/foto5.jpg', selecionado: false },
    { thumbnail: 'assets/images/foto6.jpg', selecionado: false },
    // Podes adicionar mais imagens aqui
  ];

  constructor(private router: Router) {}

  alternarSelecao(index: number) {
    this.ficheiros[index].selecionado = !this.ficheiros[index].selecionado;
  }

  continuar() {
    const selecionados = this.ficheiros.filter(f => f.selecionado);
    this.router.navigate(['/criar-album'], {
      state: { ficheiros: selecionados }
    });
  }
}
