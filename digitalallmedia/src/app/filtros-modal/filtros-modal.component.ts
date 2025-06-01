import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { IonicModule } from '@ionic/angular';


@Component({
  selector: 'app-filtros-modal',
  templateUrl: './filtros-modal.component.html',
  styleUrls: ['./filtros-modal.component.scss'],
  standalone: false,
})
export class FiltrosModalComponent {
  tags: string = '';
  categoria: string = '';
  data: string = '';

  constructor(private modalCtrl: ModalController) {}

  aplicar() {
    this.modalCtrl.dismiss({
      tags: this.tags,
      categoria: this.categoria,
      data: this.data
    });
  }

  limpar() {
    this.tags = '';
    this.categoria = '';
    this.data = '';
  }

  fechar() {
    this.modalCtrl.dismiss();
  }
}
