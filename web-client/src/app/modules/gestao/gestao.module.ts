import { NgModule } from '@angular/core';

import { GestaoRoutingModule } from './gestao-routing.module';
import { EstruturaComponent } from './components/estrutura/estrutura.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [
        SharedModule,
        GestaoRoutingModule,
        EstruturaComponent
    ],
    declarations: [EstruturaComponent]
})
export class GestaoModule { }
