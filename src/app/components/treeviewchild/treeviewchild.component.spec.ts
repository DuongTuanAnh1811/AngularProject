import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeviewchildComponent } from './treeviewchild.component';

describe('TreeviewchildComponent', () => {
  let component: TreeviewchildComponent;
  let fixture: ComponentFixture<TreeviewchildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreeviewchildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TreeviewchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
