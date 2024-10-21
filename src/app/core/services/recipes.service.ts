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
    { id: 1, image: "https://cdn.shopify.com/s/files/1/2971/2126/files/lip_balm_1024x1024.jpg?v=1591736857", name: 'Homemade Lip Balm', description: 'A natural lip balm made with beeswax, coconut oil, and essential oils.', steps: ['Melt beeswax and coconut oil', 'Add essential oils', 'Pour into containers', 'Let cool'] },
    { id: 2, image: "https://www.wayspa.com/wp-content/uploads/2022/11/cucumber-face-mask.png", name: 'DIY Face Mask', description: 'A soothing face mask made with honey, yogurt, and oatmeal.', steps: ['Mix honey, yogurt, and oatmeal', 'Apply to face', 'Leave for 15 minutes', 'Rinse off'] },
    { id: 3, image: "https://naghab.com/wp-content/uploads/2021/09/Shampoo-Golden-Berry-1.jpg", name: 'Natural Shampoo', description: 'A gentle shampoo made with castile soap, coconut milk, and essential oils.', steps: ['Mix castile soap, coconut milk, and essential oils', 'Use as regular shampoo'] },
    { id: 4, image: "https://draxe.com/wp-content/uploads/2016/01/BodyScrubThumbnail.jpg", name: 'Homemade Body Scrub', description: 'An exfoliating body scrub made with sugar, coconut oil, and vanilla extract.', steps: ['Mix sugar, coconut oil, and vanilla extract', 'Use to scrub body', 'Rinse off'] },
    { id: 5, image: "https://www.treehugger.com/thmb/GdS3Mk2sk2qCHIeXYryan4POysU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/making-homemade-deodorant-stick-with-all-natural-ingredients-concept--blue-wooden-background--ingredients--arrowroot-powder--baking-soda--beeswax--shea-butter--essential-oil--cornstarch--coconut-oil--1307745012-3e37460ecc6a4fc6bd5facf92d1b2395.jpg", name: 'DIY Deodorant', description: 'A natural deodorant made with baking soda, coconut oil, and essential oils.', steps: ['Mix baking soda, coconut oil, and essential oils', 'Apply to underarms'] }
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
