import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarseUsuarioComponent } from './registrarse-usuario.component';

describe('RegistrarseUsuarioComponent', () => {
  let component: RegistrarseUsuarioComponent;
  let fixture: ComponentFixture<RegistrarseUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrarseUsuarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarseUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
