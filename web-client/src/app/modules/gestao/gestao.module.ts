import { NgModule } from '@angular/core';

import { GestaoRoutingModule } from './gestao-routing.module';
import { EstruturaComponent } from './components/estrutura/estrutura.component';
import { SharedModule } from '../shared/shared.module';
import { ClienteComponent } from './components/cliente/cliente.component';
import { AtividadeComponent } from './components/atividade/atividade.component';

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
    ]
})
export class GestaoModule { }
