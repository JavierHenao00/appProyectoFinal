import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistroPadrePage } from './registro-padre.page';

describe('RegistroPadrePage', () => {
  let component: RegistroPadrePage;
  let fixture: ComponentFixture<RegistroPadrePage>;

  beforeEach(async () => {
    fixture = TestBed.createComponent(RegistroPadrePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
