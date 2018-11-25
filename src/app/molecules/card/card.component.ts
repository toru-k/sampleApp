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
  actionTitle1: string;
  actionTitle2: string;
  actionLink1: string;
  actionLink2: string;
  action1(event: any): void;
  action2(event: any): void;
}
