import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CriarAlbumPage } from './criar-album.page';

describe('CriarAlbumPage', () => {
  let component: CriarAlbumPage;
  let fixture: ComponentFixture<CriarAlbumPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarAlbumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
