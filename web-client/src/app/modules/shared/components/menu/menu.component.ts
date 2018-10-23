import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'onz-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Input()
  showMenu: boolean;

  constructor() { }

  ngOnInit() {
  }

}
