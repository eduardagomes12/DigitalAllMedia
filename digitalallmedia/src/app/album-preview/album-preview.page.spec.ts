import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlbumPreviewPage } from './album-preview.page';

describe('AlbumPreviewPage', () => {
  let component: AlbumPreviewPage;
  let fixture: ComponentFixture<AlbumPreviewPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumPreviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
