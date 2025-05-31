import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SelectPrintPage } from './select-print.page';

describe('SelectPrintPage', () => {
  let component: SelectPrintPage;
  let fixture: ComponentFixture<SelectPrintPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectPrintPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
