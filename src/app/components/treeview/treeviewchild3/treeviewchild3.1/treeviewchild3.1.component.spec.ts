import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Treeviewchild31Component } from './treeviewchild3.1.component';

describe('Treeviewchild31Component', () => {
  let component: Treeviewchild31Component;
  let fixture: ComponentFixture<Treeviewchild31Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Treeviewchild31Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Treeviewchild31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
