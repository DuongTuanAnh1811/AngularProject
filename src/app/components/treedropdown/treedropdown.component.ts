import { Component, OnInit } from '@angular/core';

export interface tabs {
  id: number;
  name: string;
}
export interface projects {
  id: number;
  name: string;
  nameTab: string;
}
export interface products {
  id: number;
  name: string;
  nameProject: string;
}




@Component({
  selector: 'app-treedropdown',
  templateUrl: './treedropdown.component.html',
  styleUrls: ['./treedropdown.component.css'],
})
export class TreeDropdownComponent implements OnInit {
  check: boolean = false;
  check1: boolean = false;
  tabs: tabs[] = [
    {
      id: 1,
      name: 'tab1',
    },
    {
      id: 2,
      name: 'tab2',
    },
    {
      id: 3,
      name: 'tab3',
    },
    {
      id: 4,
      name: 'tab4',
    },
  ];

  projects: projects[] = [
    { id: 1, name: 'project1', nameTab: 'tab1' },
    { id: 2, name: 'project2', nameTab: 'tab2' },
    { id: 3, name: 'project3', nameTab: 'tab3' },
    { id: 4, name: 'project4', nameTab: 'tab4' },
    { id: 5, name: 'project5', nameTab: 'tab2' },
    { id: 6, name: 'project6', nameTab: 'tab1' },
  ];
  products: products[] = [
    {
      id: 1,
      name: 'car',
      nameProject: 'project1',
    },
    {
      id: 2,
      name: 'bus',
      nameProject: 'project2',
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  toggleOn(name: string): void {
    console.log(name);
    this.check = !this.check;
  }
  toggleOn1(name: string): void {
    console.log(name);
    this.check1 = !this.check1;
  }
}
