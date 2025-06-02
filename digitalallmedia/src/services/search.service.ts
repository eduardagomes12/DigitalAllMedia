import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from, combineLatest, map } from 'rxjs';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  constructor(private http: HttpClient, private storageService: StorageService) {}

  pesquisar(termo: string): Observable<any[]> {
    const json$ = this.http.get<any[]>('assets/data.json');
    const local$ = from(this.storageService.buscarAlbuns());

    return combineLatest([json$, local$]).pipe(
      map(([jsonData, localData]) => {
        const todos = [...jsonData, ...localData];

        // 🔎 Se não tiver termo de pesquisa, retorna tudo (para carregar categorias corretamente)
        if (!termo || termo.trim() === '') {
          return todos;
        }

        termo = termo.toLowerCase();
        return todos.filter(item =>
          item.titulo.toLowerCase().includes(termo) ||
          item.tags?.some((tag: string) => tag.toLowerCase().includes(termo))
        );
      })
    );
  }
}
