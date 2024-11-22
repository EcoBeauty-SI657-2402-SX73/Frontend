import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component'; // Add this
import { CoursesComponent } from './components/Course Context/courses/courses.component';
import  LogInComponent  from './components/Login Context/log-in/log-in.component'; // Add this
import  SignUpComponent  from './components/SignUp Context/sign-up/sign-up.component'; // Add this
import { ArticlesComponent } from './components/Educational Content Context/articles/articles.component';
import { ComunnityComponent } from './components/Community Context/comunnity/comunnity.component';
import { PaymentComponent } from './components/Shared/payment/payment.component';
import { CreatepostComponent } from './components/CreatePost/createpost/createpost.component';
import { RecipesComponent} from "./components/Recipes/recipes/recipes.component";
import {RecipeDetailComponent} from "./components/Recipes/recipe-detail/recipe-detail.component";

import { authGuard } from './core/guards/auth.guard';
import { ProfileComponent } from './components/Shared/profile/profile.component';
import {PostsDetailComponent} from "./components/Community Context/posts-detail/posts-detail.component";
import {ChangePasswordComponent} from "./components/Shared/change-password/change-password.component";
import { AddRecipesComponent } from './components/Recipes/add-recipes/add-recipes.component';
import { CreateProfileComponent } from './components/Shared/create-profile/create-profile.component';
import { EnrollmentsListComponent } from './components/Shared/enrollments-list/enrollments-list.component';
import { MycoursesComponent } from './components/Course Context/mycourses/mycourses.component';
import { LearningPathComponent } from './components/Course Context/learning-path/learning-path.component';
import { TutorialDetailComponent } from './components/Educational Content Context/tutorial-detail/tutorial-detail.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [authGuard] }, // Add this
  { path: 'courses', component: CoursesComponent, canActivate: [authGuard] }, // Add this
  { path: 'my-courses', component: MycoursesComponent, canActivate: [authGuard] }, // Add this
  { path: 'my-courses/:id/learning-path', component: LearningPathComponent, canActivate: [authGuard] }, // Add this
  { path: 'login', component: LogInComponent,  },
  { path: 'signup', component: SignUpComponent },
  { path: 'createstudent', component: CreateProfileComponent, canActivate: [authGuard] },
  { path: 'articles', component: ArticlesComponent, canActivate: [authGuard] },
  { path: 'community', component: ComunnityComponent, canActivate: [authGuard] },
  { path: 'posts-detail/:id', component: PostsDetailComponent, canActivate: [authGuard] },
  { path: 'createpost', component: CreatepostComponent, canActivate: [authGuard] },
  { path: 'enrollments', component: EnrollmentsListComponent, canActivate: [authGuard] },
  { path: 'payment', component: PaymentComponent, canActivate: [authGuard]  }, // Agrega esta ruta para el componente de pago
  { path: 'profile', component: ProfileComponent, canActivate: [authGuard] },
  { path: 'recipes', component: RecipesComponent, canActivate: [authGuard]},
  { path: 'createrecipe', component: AddRecipesComponent, canActivate: [authGuard]},
  { path: 'recipe-detail/:id', component: RecipeDetailComponent, canActivate: [authGuard]},
  { path: 'tutorial-detail/:id', component: TutorialDetailComponent, canActivate: [authGuard]},
  { path: 'change-password', component: ChangePasswordComponent, canActivate: [authGuard]},
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: '**', redirectTo: 'login' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
