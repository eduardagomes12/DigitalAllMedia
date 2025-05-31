import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-adicionar-arquivo',
  templateUrl: './adicionar-arquivo.page.html',
  styleUrls: ['./adicionar-arquivo.page.scss'],
  standalone: false,
})
export class AdicionarArquivoPage {
  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;

  segmentValue = 'recentes';

  imagens: string[] = [
    'assets/images/IMG_1870.jpg',
    'assets/images/IMG_3690.jpg',
    'assets/images/IMG_3708.jpg',
    'assets/images/IMG_3866.jpg',
    'assets/images/IMG_3900.jpg',
    'assets/images/IMG_3958.jpg',
    'assets/images/IMG_5161.jpg',
    'assets/images/IMG_6359.jpg',
    'assets/images/IMG_9505.JPEG',
    'assets/images/IMG_9526.jpg',
    'assets/images/IMG_9608.JPEG'
  ];

  selectedIndexes: number[] = [];

  toggleSelection(index: number) {
    if (this.selectedIndexes.includes(index)) {
      this.selectedIndexes = this.selectedIndexes.filter(i => i !== index);
    } else {
      this.selectedIndexes.push(index);
    }
  }

  isSelected(index: number): boolean {
    return this.selectedIndexes.includes(index);
  }

  triggerFileInput() {
    this.fileInput.nativeElement.click();
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const base64 = reader.result as string;
        this.imagens.push(base64);
      };
      reader.readAsDataURL(file);
    }
  }

  adicionarSelecionadas() {
    const selecionadas = this.selectedIndexes.map(i => this.imagens[i]);
    console.log('Selecionadas:', selecionadas);
    // Redireciona ou guarda como quiseres
  }
}
