import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarFaturamentoComponent } from './cadastrar-faturamento.component';

describe('CadastrarFaturamentoComponent', () => {
  let component: CadastrarFaturamentoComponent;
  let fixture: ComponentFixture<CadastrarFaturamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrarFaturamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarFaturamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
