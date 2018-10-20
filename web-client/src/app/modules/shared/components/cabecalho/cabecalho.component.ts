import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'onz-cabecalho',
    templateUrl: './cabecalho.component.html',
    styleUrls: ['./cabecalho.component.scss']
})
export class CabecalhoComponent implements OnInit {

    public nome = 'Desenvolvedor';
    public show = false;

    constructor() { }

    ngOnInit() {
    }

    showMenu() {
        if (this.show) {
            this.show = false;
        } else {
            this.show = true;
        }
    }
}
