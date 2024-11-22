import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { courses, firstCourse, secondCourse } from '../courses/course-demo';
import { CourseModel, CourseResponse } from 'src/app/core/models/course.model';
import { CommonModule } from '@angular/common';
import { CoursesService } from 'src/app/core/services/courses.service';
import { EnrollmentsService } from 'src/app/core/services/enrollments.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { StudentsService } from 'src/app/core/services/students.service';
import { AuthService } from 'src/app/core/services/auth.service';

export interface fakeCourse {
  id: any;
  name: any;
  description: any;
  price: any;
  image: any;
  creator: any;
}

@Component({
  selector: 'app-card-component',
  templateUrl: './card-component.component.html',
  styleUrls: ['./card-component.component.scss'],
  standalone: true,
  imports: [MatCardModule, MatButtonModule, CommonModule]
})    
export class CardComponentComponent implements OnInit{

  firstCards: fakeCourse[] = [];
  secondCards: fakeCourse[] = [];
  newCourses: fakeCourse[] = [];
  studentRecordId: string | null = null;

  constructor(private courseService: CoursesService,
    private enrollmentsService: EnrollmentsService,
    private studentsService: StudentsService,
    private authService: AuthService,
    public dialog: MatDialog
  ){}

  
  getFirstCourses() {
    this.firstCards = firstCourse;
  }

  getSecondCourse(){
    this.secondCards = secondCourse;
  }

  getNewCourses(){
    this.newCourses = courses;
  }

  ngOnInit(): void {
    this.getFirstCourses();
    this.getSecondCourse();
    this.getNewCourses();

    const studentRecordId = localStorage.getItem('studentRecordId'); // Recupera el studentRecordId del localStorage
    if (studentRecordId) {
      this.studentRecordId = studentRecordId;
      console.log('Student record ID', this.studentRecordId);
    } else {
      console.error('Student record ID not found in localStorage');
    }
  }

  subscribeToCourse(title: string, description: string) {
    this.courseService.getAllCourses().subscribe(courses => {
      const existingCourse = courses.find(course => course.title === title);
      if (existingCourse) {
        console.log('Course already exists');
        this.openConfirmDialog(existingCourse.id);
      } else {
        const newCourse: CourseModel = { title, description };
        this.courseService.createCourse(newCourse).subscribe(
          (response) => {
            console.log('Course created successfully', response);
            this.openConfirmDialog(response.id);
          },
          (error) => {
            console.error('Error creating course', error);
          }
        );
      }
    });
  }

  openConfirmDialog(courseId: string): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Confirmed
        if (this.studentRecordId) {
          this.enrollmentsService.createEnrollment(this.studentRecordId, courseId).subscribe(
            (response) => {
              console.log('Enrollment created successfully', response);
              this.getNewCourses();
            },
            (error) => {
              console.error('Error creating enrollment', error);
            }
          );
        } else {
          console.error('Student record ID not found');
        }
      } else {
        // Not confirmed, delete the course
        this.courseService.deleteCourse(courseId).subscribe(
          (response) => {
            console.log('Course deleted successfully', response);
            this.getNewCourses();
          },
          (error) => {
            console.error('Error deleting course', error);
          }
        );
      }
    });
  }


}
