import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditarFicheirosPage } from './editar-ficheiros.page';

describe('EditarFicheirosPage', () => {
  let component: EditarFicheirosPage;
  let fixture: ComponentFixture<EditarFicheirosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarFicheirosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
