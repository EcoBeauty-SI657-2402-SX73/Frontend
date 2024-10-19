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
    this.getFakeRecipes();
  }

  openAddRecipe() {
    this._dialog.open(AddRecipesComponent);
  }

  getAllRecipes(){
    this._recipesService.getListRecipes().subscribe((data: any)=>{
      this.Allrecipes = data;
      console.log(this.Allrecipes);
    })
  }

  onRecipeClick(recipeId: string): void {
    this.router.navigate(['/recipe-detail', recipeId]);
  }

  getFakeRecipes() {
    this.Allrecipes = [
      { id: 1, name: 'Homemade Lip Balm', description: 'A natural lip balm made with beeswax, coconut oil, and essential oils.', steps: 'Melt beeswax and coconut oil, add essential oils, pour into containers, let cool.' },
      { id: 2, name: 'DIY Face Mask', description: 'A soothing face mask made with honey, yogurt, and oatmeal.', steps: 'Mix honey, yogurt, and oatmeal, apply to face, leave for 15 minutes, rinse off.' },
      { id: 3, name: 'Natural Shampoo', description: 'A gentle shampoo made with castile soap, coconut milk, and essential oils.', steps: 'Mix castile soap, coconut milk, and essential oils, use as regular shampoo.' },
      { id: 4, name: 'Homemade Body Scrub', description: 'An exfoliating body scrub made with sugar, coconut oil, and vanilla extract.', steps: 'Mix sugar, coconut oil, and vanilla extract, use to scrub body, rinse off.' },
      { id: 5, name: 'DIY Deodorant', description: 'A natural deodorant made with baking soda, coconut oil, and essential oils.', steps: 'Mix baking soda, coconut oil, and essential oils, apply to underarms.' }
    ];
  }
}
