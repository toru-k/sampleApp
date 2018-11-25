import { Injectable } from '@angular/core';
import { Novel } from './novel-repository';
import { NOVELS } from '../mock/novels';

@Injectable({
  providedIn: 'root'
})
export class NovelRepository {
  constructor() {}

  getNovels(): Novel[] {
    return NOVELS;
  }

  getNovel(index: number): Novel {
    return NOVELS[index];
  }
}

export interface Novel {
  headerTitle: string;
  headerSubtitle: string;
  avatarUrl: string;
  imgUrl: string;
  imgAlt: string;
  title: string;
  dateOfIssue: Date;
  content: string;
}
