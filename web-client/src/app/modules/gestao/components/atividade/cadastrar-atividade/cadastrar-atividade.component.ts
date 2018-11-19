import { Component, OnInit } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
    selector: 'onz-cadastrar-atividade',
    templateUrl: './cadastrar-atividade.component.html',
    styleUrls: ['./cadastrar-atividade.component.scss']
})
export class CadastrarAtividadeComponent implements OnInit {

    // public lista: any[];
    // dataSource = this.lista;

    name: string;
    position: number;
    weight: number;
    symbol: string;
    dataSource: any[];
    displayedColumns: string[];
    selection = new SelectionModel<CadastrarAtividadeComponent>(true, []);

    constructor() {
        this.dataSource = [
            { position: 1, name: 'Ponto de Função' },
            { position: 2, name: 'Homem Hora' },
            { position: 3, name: 'BDMG' },
            { position: 4, name: 'Prodemge' },
            { position: 5, name: 'Stefanini' },
            { position: 6, name: 'Banco Inter' }
        ];
        this.displayedColumns = ['position', 'name'];
    }

    ngOnInit() {
    }

    isAllSelected() {
        const numSelected = this.selection.selected.length;
        const numRows = this.dataSource.length;
        return numSelected === numRows;
    }
    masterToggle() {
        this.isAllSelected() ?
            this.selection.clear() :
            this.dataSource.forEach(row => this.selection.select(row));
    }

    excluirTag() {
        alert('Tag Excluída');
    }

}
