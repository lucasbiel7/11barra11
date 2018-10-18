import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EstruturaComponent } from './components/estrutura/estrutura.component';

const routes: Routes = [
    {
        path: 'gestao',
        component: EstruturaComponent,
        children: [
            {

            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GestaoRoutingModule { }
