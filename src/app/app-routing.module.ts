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
  { path: 'home', component: HomeComponent},
  { path: 'courses', component: CoursesComponent },
  { path: 'my-courses', component: MycoursesComponent },
  { path: 'my-courses/:id/learning-path', component: LearningPathComponent },
  { path: 'login', component: LogInComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'createstudent', component: CreateProfileComponent},
  { path: 'articles', component: ArticlesComponent },
  { path: 'community', component: ComunnityComponent },
  { path: 'posts-detail/:id', component: PostsDetailComponent },
  { path: 'createpost', component: CreatepostComponent },
  { path: 'enrollments', component: EnrollmentsListComponent },
  { path: 'payment', component: PaymentComponent }, // Agrega esta ruta para el componente de pago
  { path: 'profile', component: ProfileComponent},
  { path: 'recipes', component: RecipesComponent},
  { path: 'createrecipe', component: AddRecipesComponent},
  { path: 'recipe-detail/:id', component: RecipeDetailComponent},
  { path: 'tutorial-detail/:id', component: TutorialDetailComponent},
  { path: 'change-password', component: ChangePasswordComponent},
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: '**', redirectTo: 'login' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
