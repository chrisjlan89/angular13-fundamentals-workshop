import { Component, OnInit } from '@angular/core';
import { Course } from '../common/models/course';
import { CoursesService } from '../common/services/courses.service';

const emptyCourse: Course = {
  id: null,
  title: '',
  description: '',
  percentComplete: 0,
  favorite: false,
};

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  // 1. Render courses in a list
  // 2. Select a course
  // 3. Render selected course
 
  courses$: any = [];
  selectedCourse = emptyCourse;
  originalTitle = '';

  constructor(private coursesService: CoursesService) {}

  ngOnInit(): void {
    this.fetchCourses();
  }

  public fetchCourses() {
    this.courses$ = this.coursesService.all();
  }

  selectCourse(course: Course) {
    this.selectedCourse = { ...course };
    this.originalTitle = course.title;
  }

  saveCourse(course: Course) {
    console.log({ course }, 'called');
    if (course.id) {
      console.log('updating');
      this.updateCourse(course);
    } else {
      this.createCourse(course);
    }
  }

  updateCourse(course: Course) {
    this.coursesService.update(course).subscribe(() => {
      this.fetchCourses();
    });
  }

  createCourse(course: Course) {
    this.coursesService.create(course).subscribe(() => {
      this.fetchCourses();
    });
  }

  deleteCourse(courseId: string) {
    this.coursesService.delete(courseId).subscribe(() => {
      this.fetchCourses();
    });
  }

  reset() {
    this.selectCourse({ ...emptyCourse });
  }
}
