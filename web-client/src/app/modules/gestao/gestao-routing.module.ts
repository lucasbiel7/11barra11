import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EstruturaComponent } from './components/estrutura/estrutura.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { AtividadeComponent } from './components/atividade/atividade.component';
import { CadastrarAtividadeComponent } from './components/atividade/cadastrar-atividade/cadastrar-atividade.component';
import { PesquisarAtividadeComponent } from './components/atividade/pesquisar-atividade/pesquisar-atividade.component';

const routes: Routes = [
    {
        path: 'gestao',
        component: EstruturaComponent,
        children: [
            {
                path: 'cliente',
                component: ClienteComponent
            },
            {
                path: 'atividade',
                component: AtividadeComponent,
                children: [
                    {
                        path: 'cadastrar',
                        component: CadastrarAtividadeComponent
                    },
                    {
                        path: 'pesquisar',
                        component: PesquisarAtividadeComponent

                    }
                ]
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GestaoRoutingModule { }
