import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MeusAlbunsPage } from './meus-albuns.page';

describe('MeusAlbunsPage', () => {
  let component: MeusAlbunsPage;
  let fixture: ComponentFixture<MeusAlbunsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MeusAlbunsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
