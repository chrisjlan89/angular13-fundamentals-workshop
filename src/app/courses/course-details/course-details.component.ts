import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from 'src/app/common/models/course';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent  {
 currentCourse: Course;
 title = ''
  @Input() set course(value: Course) {
    if(!value) return;
    this.currentCourse = {...value}
    this.title = value.title;
  }
  @Output() saved = new EventEmitter()
  @Output() cancelled = new EventEmitter()
}
