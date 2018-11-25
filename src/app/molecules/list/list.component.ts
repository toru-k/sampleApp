import { Component, OnInit } from '@angular/core';
import { Novel, NovelRepository } from '../../repositories/novel-repository';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  novels: Novel[];
  // matColumnDefと合わせる。
  displayedColumns: string[] = ['id', 'name', 'title'];

  constructor(private repository: NovelRepository) {}

  ngOnInit() {
    this.novels = this.repository.getNovels();
  }
}
