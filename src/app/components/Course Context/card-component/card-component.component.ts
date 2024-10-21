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

  firstCards: CourseResponse[] = firstCourse;
  secondCards: CourseResponse[] = secondCourse;
  newCourses: CourseResponse[] = courses;

  constructor(){}


  ngOnInit(): void {}

}
