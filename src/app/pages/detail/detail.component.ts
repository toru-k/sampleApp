import { Component, OnInit } from '@angular/core';
import { Textfield } from '../../atoms/textfield/textfield.component';
import { Button } from '../../atoms/button/button.component';
import { Card } from '../../atoms/card/card.component';
import { NovelRepository } from '../../repositories/novel-repository';
import { DetailService } from '../../services/detail-service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  detailService: DetailService;

  constructor(private repository: NovelRepository) {
    this.detailService = new DetailService(repository);
  }

  ngOnInit() {}
}
