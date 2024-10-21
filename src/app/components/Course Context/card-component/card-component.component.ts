import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { courses, firstCourse, secondCourse } from '../courses/course-demo';
import { CourseModel, CourseResponse } from 'src/app/core/models/course.model';

@Component({
  selector: 'app-card-component',
  templateUrl: './card-component.component.html',
  styleUrls: ['./card-component.component.scss'],
  standalone: true,
  imports: [MatCardModule, MatButtonModule]
})    
export class CardComponentComponent implements OnInit{

  firstCards: CourseResponse[] = [];
  secondCards: CourseResponse[] = [];
  newCourses: CourseResponse[] = [];

  constructor(){}


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
  }

}
