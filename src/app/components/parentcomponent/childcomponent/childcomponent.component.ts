import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-childcomponent',
  templateUrl: './childcomponent.component.html',
  styleUrls: ['./childcomponent.component.css'],
})
export class ChildComponent implements OnInit {
  @Input() dataChild: any[];
  constructor() {}

  ngOnInit(): void {}
}
