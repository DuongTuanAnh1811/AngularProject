import { Bundle } from './../../Models/Bundle';
import { BundleService } from './../../services/bundle.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bundle',
  templateUrl: './bundle.component.html',
  styleUrls: ['./bundle.component.css'],
})
export class BundleComponent implements OnInit {
  bundleData: Bundle[];
  constructor(private bundleService: BundleService) {}

  ngOnInit(): void {
    this.getBundle();
  }
  public getBundle(): void {
    this.bundleService.getBundle().subscribe((bundle) => {
      this.bundleData = bundle;
    });
  }
}
