import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BundlecategoryComponent } from './bundlecategory.component';

describe('BundlecategoryComponent', () => {
  let component: BundlecategoryComponent;
  let fixture: ComponentFixture<BundlecategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BundlecategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BundlecategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
