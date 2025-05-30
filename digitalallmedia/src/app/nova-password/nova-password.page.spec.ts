import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NovaPasswordPage } from './nova-password.page';

describe('NovaPasswordPage', () => {
  let component: NovaPasswordPage;
  let fixture: ComponentFixture<NovaPasswordPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NovaPasswordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
