import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';


interface Album {
  name: string;
  cover: string;
  images: string[];
}

@Component({
  selector: 'app-adicionar-arquivo',
  templateUrl: './adicionar-arquivo.page.html',
  styleUrls: ['./adicionar-arquivo.page.scss'],
  standalone: false,
})
export class AdicionarArquivoPage implements AfterViewInit {
  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;

  segmentValue: string = 'recents';

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

  albums: Album[] = [
    {
      name: 'Bélgica',
      cover: 'assets/images/IMG_3900.jpg',
      images: []
    },
    {
      name: 'México',
      cover: 'assets/images/IMG_3958.jpg',
      images: []
    },
    {
      name: 'Porto',
      cover: 'assets/images/IMG_6359.jpg',
      images: []
    }
  ];

  selectedAlbumIndexes: number[] = [];
  constructor(private router: Router) {}

  ngAfterViewInit() {
    setTimeout(() => {
      this.segmentValue = 'recents';
    }, 0);
  }

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

  selectAlbum(index: number) {
    if (this.selectedAlbumIndexes.includes(index)) {
      this.selectedAlbumIndexes = this.selectedAlbumIndexes.filter(i => i !== index);
    } else {
      this.selectedAlbumIndexes.push(index);
    }
  }

  isAlbumSelected(index: number): boolean {
    return this.selectedAlbumIndexes.includes(index);
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

  onAlbumPdfSelected(event: any) {
  const file = event.target.files[0];
  if (file && file.type === 'application/pdf') {
    const reader = new FileReader();
    reader.onload = () => {
      const albumName = file.name.replace('.pdf', '');
      const coverInput = document.createElement('input');
      coverInput.type = 'file';
      coverInput.accept = 'image/*';

      coverInput.onchange = (e: any) => {
        const imageFile = e.target.files[0];
        if (imageFile) {
          const imageReader = new FileReader();
          imageReader.onload = () => {
            const cover = imageReader.result as string;
            this.albums.push({
              name: albumName,
              cover,
              images: []
            });
          };
          imageReader.readAsDataURL(imageFile);
        } else {
          this.albums.push({
            name: albumName,
            cover: 'assets/images/default_album.png',
            images: []
          });
        }
      };

      coverInput.click();
    };

    reader.readAsDataURL(file);
  }

  // 💡 Permite repetir a seleção de PDF
  event.target.value = '';
}


  adicionarSelecionadas() {
  const imagensSelecionadas = this.selectedIndexes.map(i => this.imagens[i]);
  const albunsSelecionados = this.selectedAlbumIndexes.map(i => this.albums[i]);

  this.router.navigate(['/select-print'], {
    state: {
      fotos: imagensSelecionadas,
      albuns: albunsSelecionados
    }
  });
}

}
