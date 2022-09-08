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
  isMenuOpened1: boolean = false;
  accessBundle: boolean = false;
  accessBundleCategory: boolean = false;
  ngOnInit(): void {}
  signout() {
    this.location.back();
    localStorage.clear();
  }
  togglerMenu(): void {
    this.isMenuOpened = !this.isMenuOpened;
    this.accessBundle = false;
    this.accessBundleCategory = false;
  }
  togglerMenu1(): void {
    this.isMenuOpened1 = !this.isMenuOpened1;
    
  }

  clickBundle(): void {
    this.accessBundle = true;
    this.accessBundleCategory = false;
  }
  clickBundleCategory(): void {
    this.accessBundle = false;
    this.accessBundleCategory = true;
  }
  clickOutside(): void {
    this.isMenuOpened = false;
  }
}
