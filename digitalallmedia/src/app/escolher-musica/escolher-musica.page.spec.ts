import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EscolherMusicaPage } from './escolher-musica.page';

describe('EscolherMusicaPage', () => {
  let component: EscolherMusicaPage;
  let fixture: ComponentFixture<EscolherMusicaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EscolherMusicaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
