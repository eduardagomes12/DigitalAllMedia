import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmar-encomenda',
  templateUrl: './confirmar-encomenda.page.html',
  styleUrls: ['./confirmar-encomenda.page.scss'],
  standalone: false,
})
export class ConfirmarEncomendaPage {
  metodosPagamento = [
    { label: 'Transferência Bancária', icon: 'card-outline' },
    { label: 'Multibanco', icon: 'cash-outline' },
    { label: 'MbWay', icon: 'logo-electron' }
  ];

  metodoSelecionado: string = '';

  constructor(private router: Router) {}

  confirmarPagamento() {
    if (!this.metodoSelecionado) {
      alert('Por favor selecione um método de pagamento.');
      return;
    }

    console.log('Pagamento confirmado com:', this.metodoSelecionado);
    this.router.navigate(['/tabs']);
  }
}
