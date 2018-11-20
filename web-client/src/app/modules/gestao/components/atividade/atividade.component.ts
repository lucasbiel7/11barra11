import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'onz-atividade',
    templateUrl: './atividade.component.html',
    styleUrls: ['./atividade.component.scss']
})
export class AtividadeComponent implements OnInit {

    public titulo: string;

    constructor() {
        this.titulo = 'Cadastro de Atividade'
    }

    ngOnInit() {
    }

}
