import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-parentcomponent',
  templateUrl: './parentcomponent.component.html',
  styleUrls: ['./parentcomponent.component.css'],
})
export class ParentComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  dataParent3: any[] = [
    {
      id: 1,
      name: 'Child3.1',
      child: [],
    },
    {
      id: 2,
      name: 'Child3.2',
      child: [],
    },
    {
      id: 3,
      name: 'Child3.3',
      child: [{ id: 4, name: 'Child3.3.1', child: [] }],
    },
  ];
  dataParent2: any[] = [
    {
      id: 1,
      name: 'Child2.1',
      child: [
        {
          id: 2,
          name: 'Child2.1.1',
          child: [],
        },
        {
          id: 3,
          name: 'Child2.1.2',
          child: [],
        },
      ],
    },
    {
      id: 2,
      name: 'Child2.2',
      child: [
        {
          id: 2,
          name: 'Child2.2.1',
          child: [],
        },
        {
          id: 3,
          name: 'Child2.2.2',
          child: [],
        },
      ],
    },
  ];
  dataParent: any[] = [
    {
      id: 1,
      name: 'Child1.1',
      child: [
        {
          id: 2,
          name: 'Child1.1.1',
          child: [],
        },
        {
          id: 3,
          name: 'Child1.1.2',
          child: [],
        },
      ],
    },
    {
      id: 2,
      name: 'Child1.2',
      child: [
        {
          id: 2,
          name: 'Child1.2.1',
          child: [],
        },
        {
          id: 3,
          name: 'Child1.2.2',
          child: [],
        },
      ],
    },
  ];
}
