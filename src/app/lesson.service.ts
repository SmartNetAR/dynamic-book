import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Lesson } from './lesson';

@Injectable({
  providedIn: 'root',
})
export class LessonService {
  constructor(
    private readonly httpClient: HttpClient
  ) { }

  getLessons(url: string) {
    return this.httpClient.get<Lesson[]>(url);
  }
}
