import { Component } from '@angular/core';
import {RecipeModel} from "../../../core/models/recipe.model";
import {ActivatedRoute} from "@angular/router";
import {RecipesService} from "../../../core/services/recipes.service";
import { CoursesService } from 'src/app/core/services/courses.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent {
  recipeId: any;
  courseId: any;
  recipe: RecipeModel | undefined;

  constructor(
    private route: ActivatedRoute,
    private recipesService: RecipesService,
    private coursesService: CoursesService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.recipeId = +params['id'];
      this.route.queryParams.subscribe(queryParams => {
        this.courseId = queryParams['courseId'];
        this.getRecipeDetails(this.recipeId);
      });
    });
  }

  getRecipeDetails(recipeId: number): void {
    this.recipesService.getFakeRecipeById(recipeId).subscribe(
      (recipe) => {
        this.recipe = recipe;
      },
      (error) => {
        console.error('Error fetching recipe details', error);
      }
    );
  }

  saveRecipeToCourse(): void {
    this.coursesService.addLearningPathItem(this.courseId, this.recipeId.toString()).subscribe(
      (response) => {
        console.log('Recipe saved to course successfully', response);
      },
      (error) => {
        console.error('Error saving recipe to course', error);
      }
    );
  }
}
