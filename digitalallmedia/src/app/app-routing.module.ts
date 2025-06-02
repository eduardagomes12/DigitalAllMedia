import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'splash',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then(m => m.SignupPageModule)
  },
  {
    path: 'termos',
    loadChildren: () => import('./termos/termos.module').then(m => m.TermosPageModule)
  },
  {
    path: 'recuperar-password',
    loadChildren: () => import('./recuperar-password/recuperar-password.module').then(m => m.RecuperarPasswordPageModule)
  },
  {
    path: 'verificar-codigo',
    loadChildren: () => import('./verificar-codigo/verificar-codigo.module').then(m => m.VerificarCodigoPageModule)
  },
  {
    path: 'nova-password',
    loadChildren: () => import('./nova-password/nova-password.module').then(m => m.NovaPasswordPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'criar-album',
    loadChildren: () => import('./criar-album/criar-album.module').then(m => m.CriarAlbumPageModule)
  },
  {
    path: 'remover-album',
    loadChildren: () => import('./remover-album/remover-album.module').then(m => m.RemoverAlbumPageModule)
  },
  {
    path: 'editar-album',
    loadChildren: () => import('./editar-album/editar-album.module').then(m => m.EditarAlbumPageModule)
  },
  {
    path: 'editar-ficheiros',
    loadChildren: () => import('./editar-ficheiros/editar-ficheiros.module').then(m => m.EditarFicheirosPageModule)
  },
  {
    path: 'impressao',
    loadChildren: () => import('./impressao/impressao.module').then(m => m.ImpressaoPageModule)
  },
  {
    path: 'adicionar-arquivo',
    loadChildren: () => import('./adicionar-arquivo/adicionar-arquivo.module').then(m => m.AdicionarArquivoPageModule)
  },
  {
    path: 'selecionar-ficheiros',
    loadChildren: () => import('./selecionar-ficheiros/selecionar-ficheiros.module').then(m => m.SelecionarFicheirosPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then(m => m.ProfilePageModule)
  },
  {
    path: 'escolher-musica',
    loadChildren: () => import('./escolher-musica/escolher-musica.module').then(m => m.EscolherMusicaPageModule)
  },
  {
    path: 'select-print',
    loadChildren: () => import('./select-print/select-print.module').then(m => m.SelectPrintPageModule)
  },
  {
    path: 'album-preview',
    loadChildren: () => import('./album-preview/album-preview.module').then(m => m.AlbumPreviewPageModule)
  },
  {
    path: 'select-print-type',
    loadChildren: () => import('./select-print-type/select-print-type.module').then(m => m.SelectPrintTypePageModule)
  },
  {
    path: 'pesquisa',
    loadChildren: () => import('./pesquisa/pesquisa.module').then(m => m.PesquisaPageModule)
  },
  {
    path: 'delivery-details',
    loadChildren: () => import('./delivery-details/delivery-details.module').then(m => m.DeliveryDetailsPageModule)
  },
  {
    path: 'detalhes',
    loadChildren: () => import('./detalhes/detalhes.module').then(m => m.DetalhesPageModule)
  },
  {
    path: 'meus-albuns',
    loadChildren: () => import('./meus-albuns/meus-albuns.module').then(m => m.MeusAlbunsPageModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./cart/cart.module').then(m => m.CartPageModule)
  },
  {
    path: 'confirm-order',
    loadChildren: () => import('./confirm-order/confirm-order.module').then(m => m.ConfirmOrderPageModule)
  },
  {
    path: 'confirmar-encomenda',
    loadChildren: () => import('./confirmar-encomenda/confirmar-encomenda.module').then(m => m.ConfirmarEncomendaPageModule)
  },
  {
    path: 'splash',
    loadChildren: () => import('./splash/splash.module').then( m => m.SplashPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules,
    onSameUrlNavigation: 'reload' // ✅ mantém navegação funcional mesmo na mesma rota
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
