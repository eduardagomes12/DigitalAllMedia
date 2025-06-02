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
    if (!this._storage) {
      this._storage = await this.storage.create();
    }
  }

  private async getStorage(): Promise<Storage> {
    if (!this._storage) {
      await this.init();
    }
    return this._storage!;
  }

  async guardarAlbum(album: any): Promise<void> {
    const storage = await this.getStorage();
    const existentes = await storage.get('albuns') || [];
    const atualizados = [album, ...existentes]; // adiciona no topo
    await storage.set('albuns', atualizados);
  }

  async buscarAlbuns(): Promise<any[]> {
    const storage = await this.getStorage();
    return await storage.get('albuns') || [];
  }

  async limparAlbuns(): Promise<void> {
    const storage = await this.getStorage();
    await storage.remove('albuns');
  }
}
