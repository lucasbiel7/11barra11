import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelAcoesComponent } from './painel-acoes.component';

describe('PainelAcoesComponent', () => {
  let component: PainelAcoesComponent;
  let fixture: ComponentFixture<PainelAcoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PainelAcoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PainelAcoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
