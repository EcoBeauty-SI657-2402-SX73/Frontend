import { Component } from '@angular/core';
import {RecipeModel} from "../../../core/models/recipe.model";
import {ActivatedRoute} from "@angular/router";
import {RecipesService} from "../../../core/services/recipes.service";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent {
  recipe: RecipeModel | undefined;

  constructor(
    private route: ActivatedRoute,
    private recipesService: RecipesService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.recipesService.getFakeRecipeById(id).subscribe(recipe => {
      this.recipe = recipe;
      console.log('Fetched recipe:', this.recipe); // Log the fetched recipe data
    });
  }
}
