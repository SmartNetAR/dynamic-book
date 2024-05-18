import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Lesson } from './lesson';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  data$ = new BehaviorSubject<Lesson[]>([]);

  constructor() { }

  setData(data: Lesson[]) {
    this.data$.next(data);
  }

  getData() {
    return this.data$.asObservable();
  }
}
