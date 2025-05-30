import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditarAlbumPage } from './editar-album.page';

describe('EditarAlbumPage', () => {
  let component: EditarAlbumPage;
  let fixture: ComponentFixture<EditarAlbumPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarAlbumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
