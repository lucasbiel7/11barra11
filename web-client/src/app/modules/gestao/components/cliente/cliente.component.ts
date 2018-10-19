import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'onz-cliente',
    templateUrl: './cliente.component.html',
    styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {

    titulo: string;

    constructor() { }

    ngOnInit() {
        this.titulo = 'Pesquisar Cliente(s)';
    }

}
