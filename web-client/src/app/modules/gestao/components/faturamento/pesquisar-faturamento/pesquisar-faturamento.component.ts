import { Component, OnInit, Input } from '@angular/core';
import { MatDatepicker } from '@angular/material';

@Component({
    selector: 'onz-pesquisar-faturamento',
    templateUrl: './pesquisar-faturamento.component.html',
    styleUrls: ['./pesquisar-faturamento.component.scss']
})
export class PesquisarFaturamentoComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }


    selecionaAno(event: Date, datePicker: MatDatepicker<any>, input) {
        datePicker.close();
        input.value = event.getFullYear();
    }
}
