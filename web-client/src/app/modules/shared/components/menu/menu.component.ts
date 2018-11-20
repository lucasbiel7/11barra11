import { Component, OnInit, Input } from '@angular/core';
import { ItemMenu } from '../../resources/enums/item-menu.enum';

@Component({
    selector: 'onz-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

    itensMenu: any[];

    constructor() {
        this.itensMenu = [
            { tooltip: ItemMenu.PARAMETRIZAÇÃO, icone: 'widgets', habilitado: true, },
            { tooltip: ItemMenu.FASE_EXECUCAO, icone: 'nfc', habilitado: true },
            { tooltip: ItemMenu.CONTRATO, icone: 'work', habilitado: true },
            { tooltip: ItemMenu.ATIVIDADE, icone: 'directions_walk', habilitado: true, url: ['atividade'] },
            { tooltip: ItemMenu.ORDEM_SERVICO, icone: 'description', habilitado: true },
            { tooltip: ItemMenu.METRICA, icone: 'receipt', habilitado: true },
            { tooltip: ItemMenu.FATURAMENTO, icone: 'attach_money', habilitado: true, url: ['faturamento'] },
        ];
    }

    ngOnInit() {
        this.itensMenu = this.itensMenu.filter(t => {
            return t.habilitado;
        });
    }

}
