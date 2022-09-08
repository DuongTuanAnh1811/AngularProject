import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-bundlecategory',
  templateUrl: './bundlecategory.component.html',
  styleUrls: ['./bundlecategory.component.css'],
})
export class BundlecategoryComponent implements OnInit {
  constructor(private location: Location) {}

  ngOnInit(): void {}
  goBack(): void {
    this.location.back();
  }
}
