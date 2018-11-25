import { Component, OnInit } from '@angular/core';
import { Textfield } from '../../atoms/textfield/textfield.component';
import { Button } from '../../atoms/button/button.component';
import { Card } from '../../atoms/card/card.component';
import { NovelRepositoryService } from '../../repositories/novel-repository.service';
import { DetailServiceService } from '../../services/detail-service.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  detailService: DetailServiceService;

  constructor(private repository: NovelRepositoryService) {
    this.detailService = new DetailServiceService(repository);
  }

  ngOnInit() {}
}
