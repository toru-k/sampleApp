import { Component, OnInit, Input } from '@angular/core';
import { Timestamp } from 'rxjs';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() card: Card;
  constructor() {}

  ngOnInit() {}
}

export interface Card {
  headerTitle: string;
  headerSubtitle: string;
  avatarUrl: string;
  imgUrl: string;
  imgAlt: string;
  title: string;
  dateOfIssue: Date;
  content: string;
  actionButton1: string;
  actionButton2: string;
}
