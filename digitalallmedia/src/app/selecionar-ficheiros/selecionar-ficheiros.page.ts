import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-selecionar-ficheiros',
  templateUrl: './selecionar-ficheiros.page.html',
  styleUrls: ['./selecionar-ficheiros.page.scss'],
  standalone:false,
})
export class SelecionarFicheirosPage implements OnInit {

  segmento = 'recentes';
  mostrarPesquisa = false;
  textoPesquisa = '';

  ficheirosRecentes = [
    { thumbnail: 'assets/images/foto1.jpg', duracao: '00:50', selecionado: false, nome: 'Ferrari' },
    { thumbnail: 'assets/images/foto2.jpg', duracao: '00:59', selecionado: false, nome: 'Hotel' },
    { thumbnail: 'assets/images/foto3.jpg', duracao: '01:10', selecionado: false, nome: 'Neon City' },
    { thumbnail: 'assets/images/foto4.jpg', selecionado: false, nome: 'Aquarium' },
    { thumbnail: 'assets/images/foto5.jpg', selecionado: false, nome: 'Market' },
    { thumbnail: 'assets/images/foto6.jpg', selecionado: false, nome: 'Exhibition' },
  ];

  ficheirosTodos: any[] = []; // todos os ficheiros da aba ativa
  ficheiros: any[] = [];      // ficheiros filtrados para mostrar

  constructor(private router: Router) {}

  ngOnInit() {
    this.atualizarFicheiros();
  }

  atualizarFicheiros() {
    this.ficheirosTodos = this.segmento === 'recentes' ? this.ficheirosRecentes : [];
    this.filtrarFicheiros();
  }

  filtrarFicheiros() {
    const termo = this.textoPesquisa.toLowerCase();
    this.ficheiros = this.ficheirosTodos.filter(f =>
      f.nome.toLowerCase().includes(termo)
    );
  }

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
