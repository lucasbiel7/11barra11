import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PesquisarAtividadeComponent } from './pesquisar-atividade.component';

describe('PesquisarAtividadeComponent', () => {
  let component: PesquisarAtividadeComponent;
  let fixture: ComponentFixture<PesquisarAtividadeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PesquisarAtividadeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PesquisarAtividadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
