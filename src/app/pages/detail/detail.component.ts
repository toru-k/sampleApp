import { Component, OnInit } from '@angular/core';
import { NovelRepository } from '../../repositories/novel-repository';
import { DetailService } from '../../services/detail-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  detailService: DetailService;

  constructor(
    private route: ActivatedRoute,
    private repository: NovelRepository
  ) {
    this.detailService = new DetailService(route, repository);
  }

  ngOnInit() {}
}
