import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltrarClienteComponent } from './filtrar-cliente.component';

describe('FiltrarClienteComponent', () => {
  let component: FiltrarClienteComponent;
  let fixture: ComponentFixture<FiltrarClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltrarClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltrarClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
