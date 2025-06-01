import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private _storage: Storage | null = null;

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    this._storage = await this.storage.create();
  }

  async guardarAlbum(album: any): Promise<void> {
    const existentes = await this._storage?.get('albuns') || [];
    existentes.push(album);
    await this._storage?.set('albuns', existentes);
  }

  async buscarAlbuns(): Promise<any[]> {
    return await this._storage?.get('albuns') || [];
  }
}
