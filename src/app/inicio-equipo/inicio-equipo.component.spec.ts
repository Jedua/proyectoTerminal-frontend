import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioEquipoComponent } from './inicio-equipo.component';

describe('InicioEquipoComponent', () => {
  let component: InicioEquipoComponent;
  let fixture: ComponentFixture<InicioEquipoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InicioEquipoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InicioEquipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
