import { Component ,OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {AddRecipesComponent} from "../add-recipes/add-recipes.component";
import {RecipesService } from 'src/app/core/services/recipes.service';
import { RecipeModel } from 'src/app/core/models/recipe.model';
import {Router} from "@angular/router";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})

export class RecipesComponent implements OnInit {
  Allrecipes: RecipeModel[] = [];

  constructor(private _dialog: MatDialog, private _recipesService: RecipesService, private router: Router) { }

  ngOnInit() {
    this.getAllRecipes();
  }

  openAddRecipe() {
    this.router.navigate(['/createrecipe']);
  }

  getAllRecipes(){
    this._recipesService.getAllFakeRecipes().subscribe((data: any)=>{
      this.Allrecipes = data;
      console.log(this.Allrecipes);
    })
  }

  onRecipeClick(recipeId: string): void {
    this.router.navigate(['/recipe-detail', recipeId]);
  }
}
