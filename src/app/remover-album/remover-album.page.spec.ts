import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RemoverAlbumPage } from './remover-album.page';

describe('RemoverAlbumPage', () => {
  let component: RemoverAlbumPage;
  let fixture: ComponentFixture<RemoverAlbumPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoverAlbumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
