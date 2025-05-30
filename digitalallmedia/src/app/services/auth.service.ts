import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage-angular';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://localhost:5225/api/Auth';

  constructor(private http: HttpClient, private storage: Storage) {
    this.storage.create(); // Inicializa o storage
  }

  login(credentials: { email: string, password: string }): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, credentials);
  }

  // ✅ Novo método para registar utilizador
  register(data: { email: string; password: string }): Observable<any> {
  return this.http.post(`${this.baseUrl}/register`, data);
  }

  async saveToken(token: string): Promise<void> {
    await this.storage.set('authToken', token);
  }

  async getToken(): Promise<string | null> {
    return await this.storage.get('authToken');
  }

  async logout(): Promise<void> {
    await this.storage.remove('authToken');
  }
}
