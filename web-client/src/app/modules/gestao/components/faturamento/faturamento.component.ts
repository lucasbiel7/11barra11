import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'onz-faturamento',
    templateUrl: './faturamento.component.html',
    styleUrls: ['./faturamento.component.scss']
})
export class FaturamentoComponent implements OnInit {
    public titulo: string;

    constructor() {
        this.titulo = 'Pesquisar Faturamento(s)';
    }

    ngOnInit() {

    }

}
