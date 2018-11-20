import { NgModule } from '@angular/core';

import { GestaoRoutingModule } from './gestao-routing.module';
import { EstruturaComponent } from './components/estrutura/estrutura.component';
import { SharedModule } from '../shared/shared.module';
import { ClienteComponent } from './components/cliente/cliente.component';
import { AtividadeComponent } from './components/atividade/atividade.component';
import { CadastrarAtividadeComponent } from './components/atividade/cadastrar-atividade/cadastrar-atividade.component';
import { PesquisarAtividadeComponent } from './components/atividade/pesquisar-atividade/pesquisar-atividade.component';
import { FaturamentoComponent } from './components/faturamento/faturamento.component';
import { CadastrarFaturamentoComponent } from './components/faturamento/cadastrar-faturamento/cadastrar-faturamento.component';
import { PesquisarFaturamentoComponent } from './components/faturamento/pesquisar-faturamento/pesquisar-faturamento.component';

@NgModule({
    imports: [
        SharedModule,
        GestaoRoutingModule,
    ],
    exports: [
        EstruturaComponent
    ],
    declarations: [
        EstruturaComponent,
        ClienteComponent,
        AtividadeComponent,
        PesquisarAtividadeComponent,
        CadastrarAtividadeComponent,
        PesquisarAtividadeComponent,
        FaturamentoComponent,
        CadastrarFaturamentoComponent,
        PesquisarFaturamentoComponent,
    ]
})
export class GestaoModule { }
