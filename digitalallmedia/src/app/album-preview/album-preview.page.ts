import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-album-preview',
  templateUrl: './album-preview.page.html',
  styleUrls: ['./album-preview.page.scss'],
  standalone: false,
})
export class AlbumPreviewPage implements OnInit {
  titulo = 'Turquia';
  data = '25/04/2023';
  musica = 'assets/audio/musica.mp3';

  fotos = [
    'assets/images/Turquia.jpg',
    'assets/images/turquia2.jpg',
    'assets/images/turquia3.jpg',
    'assets/images/turquia4.jpg',
    'assets/images/Turquia5.jpg'
  ];

  slideIndex = 0;
  playing = true;
  controlesVisiveis = false;
  intervalId: any;
  somAtivo = true;
  menuAberto = false;
  dropdownAberto = false;

  @ViewChild('audioRef') audioElement!: ElementRef<HTMLAudioElement>;

  constructor(
    private toastController: ToastController,
    private router: Router
  ) {}

  ngOnInit() {
    this.iniciarSlideshow();
  }

  iniciarSlideshow() {
    this.intervalId = setInterval(() => {
      if (this.playing) {
        this.slideIndex = (this.slideIndex + 1) % this.fotos.length;
      }
    }, 3000);
  }

  togglePlay() {
    this.playing = !this.playing;
    const audio = this.audioElement.nativeElement;

    if (this.playing) {
      audio.play();
    } else {
      audio.pause();
    }
  }

  toggleControles() {
    this.controlesVisiveis = !this.controlesVisiveis;
  }

  goToSlide(index: number) {
    this.slideIndex = index;
  }

  toggleSom() {
    this.somAtivo = !this.somAtivo;
    this.audioElement.nativeElement.muted = !this.somAtivo;
  }

  toggleDropdown() {
    this.dropdownAberto = !this.dropdownAberto;
  }

  async apagarAlbum() {
    this.menuAberto = false;
    this.dropdownAberto = false;

    const toast = await this.toastController.create({
      message: 'Album deleted with success!',
      duration: 2000,
      position: 'top',
      cssClass: 'custom-toast'
    });

    await toast.present();
  }

  voltarParaTabs() {
    this.router.navigateByUrl('/tabs', { replaceUrl: true });
  }
}
