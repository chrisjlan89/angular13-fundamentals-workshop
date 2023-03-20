import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import type { Observable } from 'rxjs';
import { Course } from '../models/course';

const BASE_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  model = 'courses';

  constructor(private http: HttpClient) {}

  private getUrl() {
    return `${BASE_URL}/${this.model}`;
  }

  private getUrlWithId(id: string) {
    return `${this.getUrl()}/${id}`;
  }

  public all(): Observable<Course[]> {
    return this.http.get<Course[]>(this.getUrl());
  }

  public find(id: string) {
    return this.http.get(this.getUrlWithId(id));
  }

  public create(course: Course) {
    return this.http.post(this.getUrl(), course);
  }

  public update(course: Course) {
    return this.http.put(this.getUrlWithId(course.id), course);
  }

  public delete(id: string) {
    return this.http.delete(this.getUrlWithId(id));
  }

  // courses: Course[] = [
  //   {
  //     id: '1',
  //     title: 'Angular 13 Fundamentals',
  //     description: 'Learn the fundamentals of Angular 13',
  //     percentComplete: 12,
  //     favorite: true,
  //   },
  //   {
  //     id: '2',
  //     title: 'JavaScript The HARDEST PARTS EVER!',
  //     description: 'Learn the JavaScript like a pro! with Will',
  //     percentComplete: 98,
  //     favorite: true,
  //   },
  //   {
  //     id: '3',
  //     title: 'Rapid Dev Pattern!',
  //     description: 'complete quick',
  //     percentComplete: 44,
  //     favorite: false,
  //   },
  // ];
}
