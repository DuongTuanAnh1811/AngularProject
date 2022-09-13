import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Treeviewchild3Component } from './treeviewchild3.component';

describe('Treeviewchild3Component', () => {
  let component: Treeviewchild3Component;
  let fixture: ComponentFixture<Treeviewchild3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Treeviewchild3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Treeviewchild3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
