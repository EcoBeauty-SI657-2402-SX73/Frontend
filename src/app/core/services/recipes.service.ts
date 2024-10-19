import { Injectable } from '@angular/core';
import {catchError, Observable, of, retry, throwError} from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import {RecipeModel} from "../models/recipe.model";

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  baseUrl = '';

  private recipes: RecipeModel[] = [
    { id: 1, name: 'Homemade Lip Balm', description: 'A natural lip balm made with beeswax, coconut oil, and essential oils.', steps: 'Melt beeswax and coconut oil, add essential oils, pour into containers, let cool.' },
    { id: 2, name: 'DIY Face Mask', description: 'A soothing face mask made with honey, yogurt, and oatmeal.', steps: 'Mix honey, yogurt, and oatmeal, apply to face, leave for 15 minutes, rinse off.' },
    { id: 3, name: 'Natural Shampoo', description: 'A gentle shampoo made with castile soap, coconut milk, and essential oils.', steps: 'Mix castile soap, coconut milk, and essential oils, use as regular shampoo.' },
    { id: 4, name: 'Homemade Body Scrub', description: 'An exfoliating body scrub made with sugar, coconut oil, and vanilla extract.', steps: 'Mix sugar, coconut oil, and vanilla extract, use to scrub body, rinse off.' },
    { id: 5, name: 'DIY Deodorant', description: 'A natural deodorant made with baking soda, coconut oil, and essential oils.', steps: 'Mix baking soda, coconut oil, and essential oils, apply to underarms.' }
  ];

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',

    })
  };

  handleError(error: HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      console.log(`An error ocurred ${error.status}, body was ${error.error}`);
    }
    else{
      console.log(`Backend returned code ${error.status}, body was ${error.error}`);
    }
    return throwError(
      'Something happened with request, please try again later'
    );
  }

  //GET
  getListRecipes(): Observable<RecipeModel>{
    return this.http.get<RecipeModel>(this.baseUrl)
      .pipe(retry(2),catchError(this.handleError))
  }

  //GetById
  getRecipeById(id: any): Observable<RecipeModel>{
    return this.http.get<RecipeModel>(this.baseUrl + '/' + id)
      .pipe(retry(2),catchError(this.handleError))
  }

  getFakeRecipeById(id: number): Observable<RecipeModel | undefined> {
    const recipe = this.recipes.find(r => r.id === id);
    return of(recipe);
  }

  //Post
  createRecipe(data: RecipeModel): Observable<RecipeModel>{
    return this.http.post<RecipeModel>(this.baseUrl, data, this.httpOptions)
      .pipe(retry(2),catchError(this.handleError))
  }
}
