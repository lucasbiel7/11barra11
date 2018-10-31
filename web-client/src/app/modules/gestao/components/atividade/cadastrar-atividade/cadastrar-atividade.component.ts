import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'onz-cadastrar-atividade',
    templateUrl: './cadastrar-atividade.component.html',
    styleUrls: ['./cadastrar-atividade.component.scss']
})
export class CadastrarAtividadeComponent implements OnInit {

    public lista: any[];
    displayedColumns: string[];
    dataSource = this.lista;


    constructor() {
        this.lista = [
            { position: 1, name: 'Hydrogen' },
            { position: 2, name: 'Helium' },
            { position: 3, name: 'Lithium' },
            { position: 4, name: 'Beryllium' },
            { position: 5, name: 'Boron' },
            { position: 6, name: 'Carbon' },
            { position: 7, name: 'Nitrogen' },
            { position: 8, name: 'Oxygen' },
            { position: 9, name: 'Fluorine' },
            { position: 10, name: 'Neon' },
        ];

        this.displayedColumns = ['position', 'name'];
        this.dataSource = this.lista;

    }

    ngOnInit() {
    }

    excluirTag() {
        alert('Tag Excluída');
    }

}
