import { Data } from './../../Models/Data';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-treeview',
  templateUrl: './treeview.component.html',
  styleUrls: ['./treeview.component.css'],
})
export class TreeviewComponent implements OnInit {
  check: boolean = false;
  check1: boolean = false;
  icon: string = '+';
  icon1: string = '+';
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
  constructor(private location: Location) {}

  ngOnInit(): void {}

  toggleOn(): void {
    this.check = !this.check;
    if (this.check === true) {
      this.icon = '-';
    } else this.icon = '+';
  }
  toggleOn1(): void {
    this.check1 = !this.check1;
    if (this.check1 === true) {
      this.icon1 = '-';
    } else this.icon1 = '+';
  }
  signout() {
    this.location.back();
    localStorage.clear();
  }
}
