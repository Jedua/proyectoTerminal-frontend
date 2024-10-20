import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioDelegadoComponent } from './inicio-delegado.component';

describe('InicioDelegadoComponent', () => {
  let component: InicioDelegadoComponent;
  let fixture: ComponentFixture<InicioDelegadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InicioDelegadoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InicioDelegadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
