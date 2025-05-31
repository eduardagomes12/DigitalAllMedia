import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-select-files',
  templateUrl: './selecionar-ficheiros.page.html',
  styleUrls: ['./selecionar-ficheiros.page.scss'],
  standalone: false,
})
export class SelecionarFicheirosPage implements OnInit {

  fotosPadrao = [
    { tipo: 'adicionar' }, // botão "+"
    { caminho: 'assets/images/foto1.jpg', selecionado: false },
    { caminho: 'assets/images/foto2.jpg', selecionado: false },
    { caminho: 'assets/images/foto3.jpg', selecionado: false },
    { caminho: 'assets/images/foto4.jpg', selecionado: false },
    { caminho: 'assets/images/foto5.jpg', selecionado: false },
    { caminho: 'assets/images/foto6.jpg', selecionado: false },
    { caminho: 'assets/images/foto7.jpg', selecionado: false },
    { caminho: 'assets/images/foto8.jpg', selecionado: false },
  ];

  constructor(private router: Router) {}

  ngOnInit() {}

  async abrirSeletorDeImagens() {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.DataUrl,
        source: CameraSource.Photos
      });

      if (image?.dataUrl) {
        const novaImagem = {
          caminho: image.dataUrl,
          selecionado: false
        };

        this.fotosPadrao.push(novaImagem);
      } else {
        console.warn('Nenhuma imagem foi selecionada.');
      }
    } catch (error) {
      console.error('Erro ao selecionar imagem:', error);
    }
  }

  toggleSelecao(index: number) {
    const foto = this.fotosPadrao[index];
    if (!foto.tipo) {
      foto.selecionado = !foto.selecionado;
    }
  }

  confirmarSelecao() {
    const selecionadas = this.fotosPadrao.filter(f => f.selecionado && !f.tipo);
    this.router.navigate(['/criar-album'], {
      state: { ficheiros: selecionadas }
    });
  }
}
