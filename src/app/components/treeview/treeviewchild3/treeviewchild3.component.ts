import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-treeviewchild3',
  templateUrl: './treeviewchild3.component.html',
  styleUrls: ['./treeviewchild3.component.css'],
})
export class Treeviewchild3Component implements OnInit {
  @Input() check: boolean;
  constructor() {}

  ngOnInit(): void {}
}
