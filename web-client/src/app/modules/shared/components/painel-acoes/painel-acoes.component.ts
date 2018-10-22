import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'onz-painel-acoes',
    templateUrl: './painel-acoes.component.html',
    styleUrls: ['./painel-acoes.component.scss']
})
export class PainelAcoesComponent implements OnInit {

    @Input()
    public titulo: string;

    constructor() {

    }

    ngOnInit() {
    }

}
