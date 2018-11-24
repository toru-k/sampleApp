import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss']
})
export class LinkComponent implements OnInit {
  @Input() link: Link;
  constructor() {}

  ngOnInit() {}
}

export interface Link {
  title: string;
  url: string;
}
