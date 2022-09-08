import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-treedropdown',
  templateUrl: './treedropdown.component.html',
  styleUrls: ['./treedropdown.component.css'],
})
export class TreeDropdownComponent implements OnInit {
  constructor(private location: Location) {}

  isMenuOpened: boolean = false;
  ngOnInit(): void {}
  signout() {
    this.location.back();
    localStorage.clear();
  }
  togglerMenu(): void {
    this.isMenuOpened = !this.isMenuOpened;
  }

  clickOutside(): void {
    this.isMenuOpened = false;
  }
}
