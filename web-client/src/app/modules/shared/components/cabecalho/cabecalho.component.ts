import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'onz-cabecalho',
    templateUrl: './cabecalho.component.html',
    styleUrls: ['./cabecalho.component.scss']
})
export class CabecalhoComponent implements OnInit {

    public usuario: string;
    public valorSelecionado;
    opcoes: any[];
    public show = false;

    constructor() {
        this.usuario = 'Desenvolvedor';
        this.opcoes = [
            { chave: 'cargo', valor: 'Desenvolvedor' },
            { chave: 'alterarSenha', valor: 'Alterar Senha' },
            { chave: 'sair', valor: 'Sair' }
        ];
    }

    ngOnInit() {

    }

}
