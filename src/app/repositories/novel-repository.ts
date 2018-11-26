import { Injectable } from '@angular/core';
import { Novel } from './novel-repository';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {
  HttpErrorHandler,
  HandleError
} from '../services/http-error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class NovelRepository {
  constructor(private http: HttpClient, httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('NovelRepository');
  }

  private sampleUrl = 'http://localhost:3000/articles';
  private sampleUrl2 = 'http://localhost:3000/user/';
  private handleError: HandleError;

  getNovels(): Observable<Novel[]> {
    return this.http
      .get<Novel[]>(this.sampleUrl)
      .pipe(catchError(this.handleError('getNovels', [])));
  }

  getNovel(index: number): Observable<Novel> {
    return this.http.get<Novel>(this.sampleUrl2 + index);
  }
}

export interface Novel {
  id: number;
  name: string;
  headerSubtitle: string;
  avatarUrl: string;
  imgUrl: string;
  imgAlt: string;
  title: string;
  dateOfIssue: Date;
  content: string;
}
