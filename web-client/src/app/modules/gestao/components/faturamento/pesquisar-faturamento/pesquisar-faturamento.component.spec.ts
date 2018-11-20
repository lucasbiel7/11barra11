import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PesquisarFaturamentoComponent } from './pesquisar-faturamento.component';

describe('PesquisarFaturamentoComponent', () => {
  let component: PesquisarFaturamentoComponent;
  let fixture: ComponentFixture<PesquisarFaturamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PesquisarFaturamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PesquisarFaturamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
