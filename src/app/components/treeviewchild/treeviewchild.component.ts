import { Data } from './../../Models/Data';
import { Component, Input, OnInit } from '@angular/core';
import { BundleService } from 'src/app/services/bundle.service';
import { Bundle } from 'src/app/Models/Bundle';
import { BundleCategory } from 'src/app/Models/BundleCategory';
import { BundleCategoryService } from 'src/app/services/bundle-category.service';

@Component({
  selector: 'app-treeviewchild',
  templateUrl: './treeviewchild.component.html',
  styleUrls: ['./treeviewchild.component.css'],
})
export class TreeviewchildComponent implements OnInit {
  @Input() datas: Data[];
  bundleData: Bundle[];
  bundleCategoryData: BundleCategory[];
  nameTitle: string;
  dataOther: Data[] = [
    {
      id: 3,
      name: 'Dashboard',
    },
    {
      id: 4,
      name: 'Check',
    },
  ];

  constructor(
    private bundleService: BundleService,
    private bundleCategoryService: BundleCategoryService
  ) {}

  ngOnInit(): void {
    console.log(this.datas);
  }
  addData(name: string): void {
    if (name === 'Bundle') {
      this.bundleService.getBundle().subscribe((bundle) => {
        this.bundleData = bundle;
      });
      this.nameTitle = name;
    }
    if (name === 'Bundle Category') {
      this.bundleCategoryService
        .getBundleCategory()
        .subscribe((bundleCategory) => {
          this.bundleCategoryData = bundleCategory;
        });
      this.nameTitle = name;
    } else {
      this.bundleCategoryData = [];
      this.bundleData = [];
      this.nameTitle = name;
    }
  }
}
