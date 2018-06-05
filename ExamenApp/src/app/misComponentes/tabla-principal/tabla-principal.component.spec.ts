import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaPrincipalComponent } from './tabla-principal.component';

describe('TablaPrincipalComponent', () => {
  let component: TablaPrincipalComponent;
  let fixture: ComponentFixture<TablaPrincipalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaPrincipalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
