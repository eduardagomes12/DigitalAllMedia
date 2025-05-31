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

    if (!state) return;

    if ((state as any)['ficheiros']?.length > 0) {
      this.ficheirosSelecionados = (state as any)['ficheiros'];
      this.ficheirosFiltrados = [...this.ficheirosSelecionados];
    }

    if ((state as any)['musicaSelecionada']) {
      this.musicaSelecionada = (state as any)['musicaSelecionada'];
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
    this.ficheirosFiltrados = this.ficheirosSelecionados.filter(f =>
      (f.nome || '').toLowerCase().includes(termo)
    );
  }
}
