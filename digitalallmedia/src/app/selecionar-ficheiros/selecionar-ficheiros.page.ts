import { Component, OnInit, NgZone } from '@angular/core';
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

  constructor(private router: Router, private ngZone: NgZone) {}

  ngOnInit() {
    const fotosSalvas = localStorage.getItem('fotosSelecionadasTemp');
    if (fotosSalvas) {
      const selecionadas = JSON.parse(fotosSalvas);
      const caminhosSelecionados = selecionadas.map((f: any) => f.caminho);

      this.fotosPadrao.forEach(foto => {
        if (!foto.tipo) {
          foto.selecionado = caminhosSelecionados.includes(foto.caminho);
        }
      });
    }
  }

  async abrirSeletorDeImagens() {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.DataUrl,
        source: CameraSource.Photos
      });

      const caminhoSeguro = image?.dataUrl ?? '';
      this.ngZone.run(() => {
        this.fotosPadrao.push({
          caminho: caminhoSeguro,
          selecionado: false
        });
      });
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

  existeSelecao(): boolean {
    return this.fotosPadrao.some(f => f.selecionado && !f.tipo);
  }

  confirmarSelecao() {
    const selecionadas = this.fotosPadrao.filter(f => f.selecionado && !f.tipo);
    localStorage.removeItem('fotosSelecionadasTemp');

    this.router.navigate(['/criar-album'], {
      state: { ficheiros: selecionadas }
    });
  }
}
