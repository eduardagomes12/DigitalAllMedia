import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-criar-album',
  templateUrl: './criar-album.page.html',
  styleUrls: ['./criar-album.page.scss'],
  standalone: false,
})
export class CriarAlbumPage implements OnInit {
  albumForm: FormGroup;
  musicaSelecionada: string = '';
  mostrarPesquisa = false;
  textoPesquisa = '';
  ficheirosSelecionados: any[] = [];
  ficheirosFiltrados: any[] = [];

  constructor(private router: Router, private fb: FormBuilder) {
    this.albumForm = this.fb.group({
      albumName: ['', Validators.required],
      albumDescription: ['']
    });
  }

  ngOnInit(): void {
    const nav = this.router.getCurrentNavigation();
    const state = nav?.extras?.state;

    // ✅ Safe and clean access to "ficheiros"
    if (state && Array.isArray(state['ficheiros']) && state['ficheiros'].length > 0) {
      this.ficheirosSelecionados = state['ficheiros'];
      this.ficheirosFiltrados = [...this.ficheirosSelecionados];
    }

    // ✅ Safe and correct access to music from localStorage
    const musica = localStorage.getItem('musicaSelecionada');
    if (musica) {
      const musicaObj = JSON.parse(musica);
      this.musicaSelecionada = musicaObj?.titulo || '';
    }
  }

  adicionarMusica() {
    this.router.navigate(['/escolher-musica']);
  }

  guardarAlbum() {
    if (this.albumForm.invalid) {
      this.albumForm.markAllAsTouched();
      return;
    }

    console.log('Album created:', {
      name: this.albumForm.value.albumName,
      description: this.albumForm.value.albumDescription,
      music: this.musicaSelecionada,
      files: this.ficheirosSelecionados
    });

    alert('Album created successfully!');
    this.router.navigate(['/tabs']);
  }

  cancelar() {
    this.router.navigate(['/tabs']);
  }

  filtrarFicheiros() {
    const termo = this.textoPesquisa.toLowerCase();
    this.ficheirosFiltrados = this.ficheirosSelecionados.filter((f: any) =>
      (f.nome || '').toLowerCase().includes(termo)
    );
  }
}
