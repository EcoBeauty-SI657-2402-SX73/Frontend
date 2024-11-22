import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TutorialModel } from 'src/app/core/models/tutorial.model';
import { CoursesService } from 'src/app/core/services/courses.service';
import { TutorialsService } from 'src/app/core/services/tutorial.service';

@Component({
  selector: 'app-tutorial-detail',
  templateUrl: './tutorial-detail.component.html',
  styleUrls: ['./tutorial-detail.component.scss']
})
export class TutorialDetailComponent implements OnInit {
  tutorialId: any;
  courseId: any;
  tutorial: TutorialModel | undefined;

  constructor(
    private route: ActivatedRoute,
    private tutorialsService: TutorialsService,
    private coursesService: CoursesService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.tutorialId = +params['id'];
      this.route.queryParams.subscribe(queryParams => {
        this.courseId = queryParams['courseId'];
        this.getTutorialDetails(this.tutorialId);
      });
    });
  }

  getTutorialDetails(tutorialId: number): void {
    this.tutorialsService.getFakeTutorialById(tutorialId).subscribe(
      (tutorial) => {
        this.tutorial = tutorial;
      },
      (error) => {
        console.error('Error fetching tutorial details', error);
      }
    );
  }

  saveTutorialToCourse(): void {
    this.coursesService.addLearningPathItem(this.courseId, this.tutorialId.toString()).subscribe(
      (response) => {
        console.log('Tutorial saved to course successfully', response);
      },
      (error) => {
        console.error('Error saving tutorial to course', error);
      }
    );
  }
}