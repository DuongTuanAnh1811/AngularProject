import { BundlecategoryComponent } from './components/bundlecategory/bundlecategory.component';
import { BundleComponent } from './components/bundle/bundle.component';
import { SigninComponent } from './components/signin/signin.component';
import { TreeDropdownComponent } from './components/treedropdown/treedropdown.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/sigin', pathMatch: 'full' },
  { path: 'sigin', component: SigninComponent },
  { path: 'treeDropdown', component: TreeDropdownComponent },
  { path: 'bundleCategory', component: BundlecategoryComponent },
  { path: 'bundle', component: BundleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
