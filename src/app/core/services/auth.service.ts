import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { UserCredential } from '@angular/fire/auth';

export interface Credential {
  username: string;
  password: string;
}

export interface AuthResponse {
  id: any;
  username: any;
  token: any;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private backendUrl = 'http://localhost:8080/api/v1/authentication';
  private secureToken: string = '';
  private authStateSubject = new BehaviorSubject<any>(null);
  authState$ = this.authStateSubject.asObservable();

  constructor(private http: HttpClient) {}

  signUpWithEmailAndPassword(credential: Credential): Observable<AuthResponse> {
    return this.http.post<any>(`${this.backendUrl}/sign-up`, credential);
  }

  logInWithEmailAndPassword(credential: Credential): Observable<AuthResponse> {
    return this.http.post<any>(`${this.backendUrl}/sign-in`, credential);
  }

  tokenGetter() {
    const token = localStorage.getItem('authToken');
    if (token) {
      return token;
    } else {
      console.log('No hay token almacenado');
      return null;
    }
  }

  tokenSetter(token: string, email: string) {
    this.secureToken = token;
    localStorage.setItem('authToken', token);
    localStorage.setItem('userEmail', email); // Guarda el email en el localStorage
    console.log(this.secureToken);
    this.authStateSubject.next({ token, email }); // Actualiza el estado de autenticación con el token y el email
  }

  logOut(): void {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userEmail');
    this.secureToken = '';
    this.authStateSubject.next(null); // Actualiza el estado de autenticación
    console.log('Logged out');
  }

}