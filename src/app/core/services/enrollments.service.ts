import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Enrollment } from '../models/enrollment.model';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentsService {

  private enrollmentsUrl = 'https://ecobeauty-backend-dhc7bugyekc5e8dv.canadacentral-01.azurewebsites.net/api/v1/enrollments';

  constructor(private http: HttpClient) { }

  getAllEnrollments(): Observable<Enrollment[]> {
    return this.http.get<Enrollment[]>(this.enrollmentsUrl);
  }

  createEnrollment(studentRecordId: string, courseId: string): Observable<Enrollment> {
    const enrollmentData = { studentRecordId, courseId };
    return this.http.post<Enrollment>(this.enrollmentsUrl, enrollmentData);
  }

  confirmEnrollment(enrollmentId: string): Observable<Enrollment> {
    return this.http.post<Enrollment>(`${this.enrollmentsUrl}/${enrollmentId}/confirmations`, {});
  }

  cancelEnrollment(enrollmentId: string): Observable<Enrollment> {
    return this.http.post<Enrollment>(`${this.enrollmentsUrl}/${enrollmentId}/cancellations`, {});
  }

  rejectEnrollment(enrollmentId: string): Observable<Enrollment> {
    return this.http.post<Enrollment>(`${this.enrollmentsUrl}/${enrollmentId}/rejections`, {});
  }
}