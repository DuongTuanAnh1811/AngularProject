import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-bundle',
  templateUrl: './bundle.component.html',
  styleUrls: ['./bundle.component.css'],
})
export class BundleComponent implements OnInit {
  constructor(private location: Location) {}

  ngOnInit(): void {}
  goBack(): void {
    this.location.back();
  }
}
