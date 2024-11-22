import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { ProfileResponse, Student, StudentResponse } from '../models/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  private studentUrl = 'http://localhost:8080/api/v1/students';
  private profileUrl = 'http://localhost:8080/api/v1/profiles';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
  };

  createStudent(data: Student): Observable<StudentResponse> {
    return this.http.post<StudentResponse>(this.studentUrl, data).pipe(
      map((response: StudentResponse) => {
        localStorage.setItem('studentRecordId', response.acmeStudentRecordId); // Guarda el studentRecordId en el localStorage
        return response;
      })
    );
  }


  getAllStudents(): Observable<any[]> {
    return this.http.get<any[]>(this.studentUrl);
  }

  getAllProfiles(): Observable<ProfileResponse[]> {
    return this.http.get<ProfileResponse[]>(this.profileUrl);
  }

  getStudentByRecordId(recordId: string): Observable<any> {
    return this.http.get<any>(`${this.studentUrl}/${recordId}`);
  }

  getProfileByEmail(email: string): Observable<ProfileResponse | undefined> {
    return this.getAllProfiles().pipe(
      map(profiles => profiles.find(profile => profile.email === email))
    );
  }

  getStudentByProfileId(profileId: string): Observable<any | undefined> {
    return this.getAllStudents().pipe(
      map(students => students.find(student => student.profileId === profileId))
    );
  }
}