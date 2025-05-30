import { Component } from '@angular/core';

@Component({
  selector: 'app-adicionar-arquivo',
  templateUrl: './adicionar-arquivo.page.html',
  styleUrls: ['./adicionar-arquivo.page.scss'],
  standalone: false,
})
export class AdicionarArquivoPage {
  imagens = [
    { thumb: 'assets/imgs/img1.jpg', duracao: '00:59' },
    { thumb: 'assets/imgs/img2.jpg', duracao: '00:52' },
    { thumb: 'assets/imgs/img3.jpg' },
    { thumb: 'assets/imgs/img4.jpg' },
    { thumb: 'assets/imgs/img5.jpg', duracao: '01:10' },
    { thumb: 'assets/imgs/img6.jpg' },
    { thumb: 'assets/imgs/img7.jpg' },
    { thumb: 'assets/imgs/img8.jpg', duracao: '00:37' },
    { thumb: 'assets/imgs/img9.jpg' },
  ];

  segmentChanged(event: any) {
    const valor = event.detail.value;
    console.log('Segmento selecionado:', valor);
    // Aqui podes mudar as imagens se quiseres
  }
}
