import { Component, OnInit } from '@angular/core';
import { EnrollmentsService } from 'src/app/core/services/enrollments.service';
import { CoursesService } from 'src/app/core/services/courses.service';
import { Router } from '@angular/router';
import { Enrollment } from 'src/app/core/models/enrollment.model';
import { CourseModel } from 'src/app/core/models/course.model';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mycourses',
  templateUrl: './mycourses.component.html',
  styleUrls: ['./mycourses.component.scss'],
})
export class MycoursesComponent implements OnInit {
  enrollments: Enrollment[] = [];
  courses: CourseModel[] = [];

  constructor(
    private enrollmentsService: EnrollmentsService,
    private coursesService: CoursesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getConfirmedEnrollments();
  }

  getConfirmedEnrollments(): void {
    const studentRecordId = localStorage.getItem('studentRecordId');
    if (studentRecordId) {
      this.enrollmentsService.getAllEnrollments().subscribe(
        (response) => {
          this.enrollments = response.filter(enrollment => enrollment.studentRecordId === studentRecordId && enrollment.status === 'confirmed');
          this.enrollments.forEach(enrollment => {
            this.coursesService.getCourseById(enrollment.courseId).subscribe(course => {
              this.courses.push(course);
            });
          });
        },
        (error) => {
          console.error('Error fetching enrollments', error);
        }
      );
    } else {
      console.error('Student record ID not found in localStorage');
    }
  }

  viewCourse(courseId: string): void {
    this.router.navigate([`/my-courses/${courseId}/learning-path`]);
  }
}
