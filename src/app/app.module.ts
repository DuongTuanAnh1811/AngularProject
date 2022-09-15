import { TreeviewchildComponent } from './components/treeview/treeviewchild/treeviewchild.component';
import { Treeviewchild2Component } from './components/treeview/treeviewchild2/treeviewchild2.component';
import { Treeviewchild3Component } from './components/treeview/treeviewchild3/treeviewchild3.component';
import { Treeviewchild31Component } from './components/treeview/treeviewchild3/treeviewchild3.1/treeviewchild3.1.component';
import { Treeviewchild32Component } from './components/treeview/treeviewchild3/treeviewchild3.2/treeviewchild3.2.component';
import { TreeviewComponent } from './components/treeview/treeview.component';
import { ParentComponent } from './components/parentcomponent/parentcomponent.component';
import { ChildComponent } from './components/parentcomponent/childcomponent/childcomponent.component';
import { BundlecategoryComponent } from './components/bundlecategory/bundlecategory.component';
import { BundleComponent } from './components/bundle/bundle.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './components/signin/signin.component';
import { TreeDropdownComponent } from './components/treedropdown/treedropdown.component';
import { NgZorroAntdModule } from './ng-zorro-antd.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NZ_ICONS } from 'ng-zorro-antd/icon';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import { IconDefinition } from '@ant-design/icons-angular';
import * as AllIcons from '@ant-design/icons-angular/icons';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';

registerLocaleData(en);

const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(
  (key) => antDesignIcons[key]
);

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    TreeDropdownComponent,
    BundleComponent,
    BundlecategoryComponent,
    TreeviewComponent,
    TreeviewchildComponent,
    Treeviewchild2Component,
    Treeviewchild3Component,
    Treeviewchild31Component,
    ParentComponent,
    ChildComponent,
    Treeviewchild32Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    { provide: NZ_ICONS, useValue: icons },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
