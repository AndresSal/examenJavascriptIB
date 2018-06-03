import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaInformacionComponent } from './tarjeta-informacion.component';

describe('TarjetaInformacionComponent', () => {
  let component: TarjetaInformacionComponent;
  let fixture: ComponentFixture<TarjetaInformacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarjetaInformacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetaInformacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
