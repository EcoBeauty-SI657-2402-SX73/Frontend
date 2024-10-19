import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RecipesService} from "../../../core/services/recipes.service";
import { RecipeModel } from 'src/app/core/models/recipe.model';
import { NgForm } from '@angular/forms';
import { DialogRef } from '@angular/cdk/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

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
    private dialogRef: DialogRef<AddRecipesComponent>,
    private dialog: MatDialog
  ) {}

  addRecipe() {
    console.log('Data being sent:', this.recipeData);

    this.recipesService.createRecipe(this.recipeData).subscribe(
      (data: any) => {
        this.openSnackBar('Recipe created', 'Close');
        console.log(data);
        this.dialogRef.close();
      },
      (error) => {
        this.openSnackBar(`Error: ${error.message}`, 'Close', 'error-snackbar');
        console.error(error);
      }
    );
  }

  cancel() {
    this.dialog.closeAll();
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
}
