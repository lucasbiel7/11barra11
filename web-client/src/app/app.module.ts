import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CoreModule } from './modules/core/core.module';
import { SharedModule } from './modules/shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { GestaoModule } from './modules/gestao/gestao.module';
import { PainelModule } from './modules/painel/painel.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        /**
         *Modulos padrões
         */
        SharedModule,
        CoreModule.forRoot(),
        /**
         * Modulos do sistema
         */
        GestaoModule,
        PainelModule,
        /**
         * Roteamento principal
         * PS: Não colocar nenhum modulo abaixo dele motivo: Wildcard routing
         *
         */
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
