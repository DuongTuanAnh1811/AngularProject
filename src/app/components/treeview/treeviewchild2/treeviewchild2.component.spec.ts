import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Treeviewchild2Component } from './treeviewchild2.component';

describe('Treeviewchild2Component', () => {
  let component: Treeviewchild2Component;
  let fixture: ComponentFixture<Treeviewchild2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Treeviewchild2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Treeviewchild2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
