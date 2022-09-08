import { BundleCategoryService } from './../../services/bundle-category.service';
import { BundleCategory } from './../../Models/BundleCategory';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bundlecategory',
  templateUrl: './bundlecategory.component.html',
  styleUrls: ['./bundlecategory.component.css'],
})
export class BundlecategoryComponent implements OnInit {
  bundleCategoryData: BundleCategory[];
  constructor(private bundleCategoryService: BundleCategoryService) {}

  ngOnInit(): void {
    this.getBundleCategory();
  }
  public getBundleCategory(): void {
    this.bundleCategoryService
      .getBundleCategory()
      .subscribe((bundleCategory) => {
        this.bundleCategoryData = bundleCategory;
      });
  }
}
