import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EstruturaComponent } from './components/estrutura/estrutura.component';
import { ClienteComponent } from './components/cliente/cliente.component';

const routes: Routes = [
    {
        path: 'gestao',
        component: EstruturaComponent,
        children: [
            {
                path: 'cliente',
                component: ClienteComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GestaoRoutingModule { }
