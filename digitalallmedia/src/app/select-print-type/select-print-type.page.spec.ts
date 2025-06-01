import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SelectPrintTypePage } from './select-print-type.page';

describe('SelectPrintTypePage', () => {
  let component: SelectPrintTypePage;
  let fixture: ComponentFixture<SelectPrintTypePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectPrintTypePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
