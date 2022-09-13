import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Treeviewchild32Component } from './treeviewchild3.2.component';

describe('Treeviewchild32Component', () => {
  let component: Treeviewchild32Component;
  let fixture: ComponentFixture<Treeviewchild32Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Treeviewchild32Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Treeviewchild32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
