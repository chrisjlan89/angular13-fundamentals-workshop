import { Component, EventEmitter, Input,  Output } from '@angular/core';
import { Course } from 'src/app/common/models/course';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent {

  @Input() courses: Course[] = [];
  @Output() select: EventEmitter<any> = new EventEmitter()
  @Output() delete: EventEmitter<any> =  new EventEmitter()
}
