import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseModel } from 'src/app/core/models/course.model';
import { RecipeModel } from 'src/app/core/models/recipe.model';
import { TutorialModel } from 'src/app/core/models/tutorial.model';
import { CoursesService } from 'src/app/core/services/courses.service';
import { RecipesService } from 'src/app/core/services/recipes.service';
import { TutorialsService } from 'src/app/core/services/tutorial.service';

@Component({
  selector: 'app-learning-path',
  templateUrl: './learning-path.component.html',
  styleUrls: ['./learning-path.component.scss']
})
export class LearningPathComponent implements OnInit {
  courseId: any;
  course: CourseModel = {
    id: '',
    title: '',
    description: ''
  };
  recipes: RecipeModel[] = [];
  tutorials: TutorialModel[] = [];

  constructor(
    private route: ActivatedRoute,
    private coursesService: CoursesService,
    private recipesService: RecipesService,
    private tutorialsService: TutorialsService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.courseId = params['id'];
      this.getCourseDetails(this.courseId);
      this.getRecipes(this.courseId);
      this.getTutorials(this.courseId);
    });
  }

  getCourseDetails(courseId: string): void {
    this.coursesService.getCourseById(courseId).subscribe(
      (course) => {
        this.course = course;
      },
      (error) => {
        console.error('Error fetching course details', error);
      }
    );
  }

  getRecipes(courseId: string): void {
    this.recipesService.getAllFakeRecipes().subscribe(
      (recipes) => {
        this.recipes = recipes.filter(recipe => recipe.courseId === courseId);
      },
      (error) => {
        console.error('Error fetching recipes', error);
      }
    );
  }

  getTutorials(courseId: string): void {
    this.tutorialsService.getAllFakeTutorials().subscribe(
      (tutorials) => {
        this.tutorials = tutorials.filter(tutorial => tutorial.courseId === courseId);
      },
      (error) => {
        console.error('Error fetching tutorials', error);
      }
    );
  }

}