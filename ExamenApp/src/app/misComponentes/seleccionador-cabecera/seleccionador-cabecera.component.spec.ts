import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeleccionadorCabeceraComponent } from './seleccionador-cabecera.component';

describe('SeleccionadorCabeceraComponent', () => {
  let component: SeleccionadorCabeceraComponent;
  let fixture: ComponentFixture<SeleccionadorCabeceraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeleccionadorCabeceraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeleccionadorCabeceraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
