import { Component, ViewChild } from '@angular/core';
import { RecipesService } from "../../../core/services/recipes.service";
import { RecipeModel } from 'src/app/core/models/recipe.model';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-recipes',
  templateUrl: './add-recipes.component.html',
  styleUrls: ['./add-recipes.component.scss'],
})
export class AddRecipesComponent {
  recipeData: RecipeModel = {} as RecipeModel;
  @ViewChild('recipeForm', { static: false }) recipeForm!: NgForm;

  constructor(
    private recipesService: RecipesService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  addRecipe() {
    if (this.recipeForm.valid) {
      console.log('Data being sent:', this.recipeData);

      this.recipesService.createRecipe(this.recipeData).subscribe(
        (data: any) => {
          this.openSnackBar('Recipe created', 'Close');
          console.log(data);
          this.redirectAfterDelay('/reccipes', 3000);
        },
        (error) => {
          this.openSnackBar(`Error: ${error.message}`, 'Close', 'error-snackbar');
          console.error(error);
        }
      );
    } else {
      this.openSnackBar('Please fill out the form correctly.', 'Close', 'error-snackbar');
    }
  }

  cancel() {
    this.redirectAfterDelay('/recipes', 1000);
  }

  private openSnackBar(
    message: string,
    action: string,
    panelClass: string = ''
  ): void {
    this.snackBar.open(message, action, {
      duration: 3000,
      panelClass: panelClass,
    });
  }

  redirectAfterDelay(url: string, delay: number) {
    setTimeout(() => {
      this.router.navigate([url]);
    }, delay);
  }
}