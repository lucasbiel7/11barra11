import { Component, OnInit } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'onz-cadastrar-atividade',
    templateUrl: './cadastrar-atividade.component.html',
    styleUrls: ['./cadastrar-atividade.component.scss']
})
export class CadastrarAtividadeComponent implements OnInit {
    listaTags: string[];
    nomeTag: string;

    constructor() {
        this.nomeTag = '';
        this.listaTags = [];
    }

    ngOnInit() {
    }

    adicionarTag() {
        if (this.nomeTag !== '') {
            this.listaTags.push(this.nomeTag);
            this.nomeTag = '';
        }
    }

    desabilitarBotaoAdd() {
        return this.nomeTag !== '' ? true : false;
    }

    removerTag(event) {
        console.log(event);
    }


}
