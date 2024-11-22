import { Component, OnInit } from '@angular/core';
import { CourseModel } from 'src/app/core/models/course.model';
import { Enrollment } from 'src/app/core/models/enrollment.model';
import { CoursesService } from 'src/app/core/services/courses.service';
import { EnrollmentsService } from 'src/app/core/services/enrollments.service';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-enrollments',
  templateUrl: './enrollments-list.component.html',
  styleUrls: ['./enrollments-list.component.scss'],
  standalone: true,
  imports: [MatCardModule, CommonModule, MatButtonModule]
})
export class EnrollmentsListComponent implements OnInit {
  enrollments: Enrollment[] = [];
  courses: { [key: string]: CourseModel } = {};

  constructor(
    private enrollmentsService: EnrollmentsService,
    private coursesService: CoursesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getEnrollments();
  }

  getEnrollments(): void {
    const studentRecordId = localStorage.getItem('studentRecordId');
    if (studentRecordId) {
      this.enrollmentsService.getAllEnrollments().subscribe(
        (response) => {
          this.enrollments = response.filter(enrollment => enrollment.studentRecordId === studentRecordId);
          this.enrollments.forEach(enrollment => {
            this.coursesService.getCourseById(enrollment.courseId).subscribe(course => {
              this.courses[enrollment.courseId] = course;
            });
          });
          console.log('Enrollments:', this.enrollments);
        },
        (error) => {
          console.error('Error fetching enrollments', error);
        }
      );
    } else {
      console.error('Student record ID not found in localStorage');
    }
  }

  getCourseTitle(courseId: string): string {
    return this.courses[courseId] ? this.courses[courseId].title : 'Loading...';
  }

  cancelEnrollment(enrollmentId: string): void {
    this.enrollmentsService.cancelEnrollment(enrollmentId).subscribe(
      (response) => {
        const enrollment = this.enrollments.find(e => e.enrollmentId === enrollmentId);
        if (enrollment) {
          enrollment.status = 'cancelled';
        }
      },
      (error) => {
        console.error('Error cancelling enrollment', error);
      }
    );
  }

  // Redirect to payment page by router
  goToPayment(courseId: string, enrollmentId: string): void {
    this.router.navigate(['/payment'], { queryParams: { courseId: courseId, enrollmentId: enrollmentId } });
  }

}