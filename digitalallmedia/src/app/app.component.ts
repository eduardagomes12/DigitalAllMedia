import { Component } from '@angular/core';
import { ScreenOrientation } from '@capacitor/screen-orientation';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  constructor() {
    this.bloquearRotacao();
  }

  async bloquearRotacao() {
    try {
      await ScreenOrientation.lock({ orientation: 'portrait' });
      console.log('Rotação bloqueada para retrato');
    } catch (err) {
      console.error('Erro ao bloquear rotação:', err);
    }
  }
}
