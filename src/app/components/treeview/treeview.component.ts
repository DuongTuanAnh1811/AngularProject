import { Data } from './../../Models/Data';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-treeview',
  templateUrl: './treeview.component.html',
  styleUrls: ['./treeview.component.css'],
})
export class TreeviewComponent implements OnInit {
  check: boolean = false;
  icon: string = '+';
  Datas: Data[] = [
    {
      id: 1,
      name: 'Bundle',
    },
    {
      id: 2,
      name: 'Bundle Category',
    },
    {
      id: 3,
      name: 'Other',
      
    },

  ];
  constructor() {}

  ngOnInit(): void {}

  toggleOn(): void {
    this.check = !this.check;
    if (this.check === true) {
      this.icon = '-';
    } else this.icon = '+';
  }
}
