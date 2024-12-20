import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/Shared/navbar/navbar.component';
import { FooterComponent } from './components/Shared/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CoursesComponent } from './components/Course Context/courses/courses.component';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import {MatChipsModule} from '@angular/material/chips';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import { ArticlesComponent } from './components/Educational Content Context/articles/articles.component';
import { ComunnityComponent } from './components/Community Context/comunnity/comunnity.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatPaginatorModule } from '@angular/material/paginator';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MatSnackBarModule} from '@angular/material/snack-bar';
import { ToastrModule } from 'ngx-toastr';

import { AddCourseComponent } from './components/Course Context/add-course/add-course.component';
import { PaymentComponent } from './components/Shared/payment/payment.component';
import { CreatepostComponent } from './components/CreatePost/createpost/createpost.component';

import { ProfileComponent } from './components/Shared/profile/profile.component';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import {AuthInterceptor} from "./core/services/auth.interceptor";
import {AuthService} from "./core/services/auth.service";
import { PostsDetailComponent } from './components/Community Context/posts-detail/posts-detail.component';
import { CardComponentComponent } from './components/Course Context/card-component/card-component.component';
import {RecipesComponent} from "./components/Recipes/recipes/recipes.component";
import {AddRecipesComponent} from "./components/Recipes/add-recipes/add-recipes.component";
import {RecipeDetailComponent} from "./components/Recipes/recipe-detail/recipe-detail.component";
import { ChangePasswordComponent } from './components/Shared/change-password/change-password.component';
import {CacheInterceptor} from "./core/services/cache.interceptor";
import { CreateProfileComponent } from './components/Shared/create-profile/create-profile.component';
import { ConfirmDialogComponent } from './components/Course Context/confirm-dialog/confirm-dialog.component';
import { MycoursesComponent } from './components/Course Context/mycourses/mycourses.component';
import { LearningPathComponent } from './components/Course Context/learning-path/learning-path.component';
import { TutorialDetailComponent } from './components/Educational Content Context/tutorial-detail/tutorial-detail.component';
import { SafeUrlPipe } from './components/Shared/safeUrl/safe-url.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CoursesComponent,
    ArticlesComponent,
    ComunnityComponent,
    AddCourseComponent,
    PaymentComponent,
    CreatepostComponent,
    ProfileComponent,
    PostsDetailComponent,
    RecipesComponent,
    AddRecipesComponent,
    RecipeDetailComponent,
    ChangePasswordComponent,
    CreateProfileComponent,
    ConfirmDialogComponent,
    MycoursesComponent,
    LearningPathComponent,
    TutorialDetailComponent,
    SafeUrlPipe

  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    AppRoutingModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    CommonModule,
    MatButtonModule,
    MatCardModule,
    HomeComponent,
    MatIconModule,
    MatGridListModule,
    MatPaginatorModule,
    ToastrModule.forRoot(),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    MatListModule,
    MatDividerModule,
    MatChipsModule,
    HttpClientModule,
    MatDialogModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    FormsModule,
    MatSnackBarModule,
    CardComponentComponent,
    NgOptimizedImage

  ],
  providers: [
    AuthService,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    { provide: HTTP_INTERCEPTORS, useClass: CacheInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
