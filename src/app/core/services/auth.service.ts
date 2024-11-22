import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject, of } from 'rxjs';
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
  private backendUrl = 'https://ecobeauty-backend-dhc7bugyekc5e8dv.canadacentral-01.azurewebsites.net/api/v1/authentication';
  private secureToken: string = '';
  private authStateSubject = new BehaviorSubject<any>(null);
  authState$ = this.authStateSubject.asObservable();
  private authState: boolean = false;

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
    this.authStateSubject.next({ token, email });
    this.authState = true; // Actualiza el estado de autenticación con el token y el email
  }

  logOut(): void {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userEmail');
    this.secureToken = '';
    this.authStateSubject.next(null); // Actualiza el estado de autenticación
    this.authState = false;
    console.log('Logged out');
  }

  isLoggedIn(): boolean {
    return this.authState;
  }

  get auth(): Observable<boolean> {
    return of(this.authState);
  }
}