import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError} from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { CourseModel } from '../models/course.model';

@Injectable({
    providedIn: 'root'
})
export class CoursesService {
  baseUrl = 'https://ecobeauty-backend-dhc7bugyekc5e8dv.canadacentral-01.azurewebsites.net/api/v1/courses';

    constructor(private http: HttpClient) { }

    httpOptions = {
      headers: new HttpHeaders({
          'Content-Type': 'application/json'
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
    getAllCourses(): Observable<CourseModel[]> {
      return this.http.get<CourseModel[]>(this.baseUrl);
    }

    //GetById
    getCourseById(id: any): Observable<CourseModel>{
      return this.http.get<CourseModel>(this.baseUrl + '/' + id)
      .pipe(retry(2),catchError(this.handleError))
    }

    //Post
    createCourse(data: CourseModel): Observable<CourseModel>{
      return this.http.post<CourseModel>(this.baseUrl, data, this.httpOptions)
      .pipe(retry(2),catchError(this.handleError))
    }

    //DELETE
    deleteCourse(id: any): Observable<CourseModel>{
      return this.http.delete<CourseModel>(this.baseUrl + '/' + id, this.httpOptions)
      .pipe(retry(2),catchError(this.handleError))
    }

    addLearningPathItem(courseId: string, tutorialId: string): Observable<any> {
      return this.http.post<any>(`${this.baseUrl}/${courseId}/learning-path-items/${tutorialId}`, {});
    }
}
