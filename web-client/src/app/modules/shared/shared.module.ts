import { NgModule, ModuleWithProviders } from '@angular/core';
import { CabecalhoComponent } from './components/cabecalho/cabecalho.component';
import { MenuComponent } from './components/menu/menu.component';
import { PainelAcoesComponent } from './components/painel-acoes/painel-acoes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { RodapeComponent } from './components/rodape/rodape.component';

@NgModule({
    imports: [
        /* Angular Core */
        BrowserModule,
        CommonModule,
        HttpModule,
        RouterModule,
        BrowserModule,
        CommonModule,
        HttpModule,
        // Animação
        BrowserAnimationsModule,
        /* Angular Material*/
        MatCheckboxModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatInputModule,
        MatRadioModule,
        MatSelectModule,
        MatSidenavModule,
        MatButtonModule,
        MatProgressBarModule,
    ],
    exports: [
        /* Angular Core */
        BrowserModule,
        CommonModule,
        HttpModule,
        RouterModule,
        BrowserModule,
        CommonModule,
        HttpModule,
        // Animação
        BrowserAnimationsModule,
        /* Angular Material*/
        MatCheckboxModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatInputModule,
        MatRadioModule,
        MatSelectModule,
        MatSidenavModule,
        MatButtonModule,
        MatProgressBarModule,
        // Componentes shared
        CabecalhoComponent,
        MenuComponent,
        PainelAcoesComponent,
        RodapeComponent
    ]
    , declarations: [
        CabecalhoComponent,
        MenuComponent,
        PainelAcoesComponent,
        RodapeComponent
    ]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: []
        };
    }
}
