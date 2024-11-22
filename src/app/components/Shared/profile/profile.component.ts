import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { User } from 'firebase/auth';
import {Router} from "@angular/router";
import { StudentsService } from 'src/app/core/services/students.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  email: string | null = '';
  name: string | null = '';
  userPhotoURL: string | null = 'https://static.vecteezy.com/system/resources/thumbnails/005/346/410/small_2x/close-up-portrait-of-smiling-handsome-young-caucasian-man-face-looking-at-camera-on-isolated-light-gray-studio-background-photo.jpg'; // Definir una URL por defecto
  constructor(private authService: AuthService, private router: Router, private studentService: StudentsService) {}

  ngOnInit(): void {
    this.email = localStorage.getItem('userEmail');
    console.log('Email from localStorage:', this.email); // Agrega un mensaje de depuración
    if (this.email) {
      this.studentService.getAllProfiles().subscribe(
        (profiles) => {
          console.log('Profiles fetched:', profiles); // Agrega un mensaje de depuración
          const profile = profiles.find(p => p.email === this.email);
          if (profile) {
            this.name = profile.fullName;
            console.log('Full name:', this.name);
            console.log('Email:', this.email);
          } else {
            console.log('Profile not found for email:', this.email); // Agrega un mensaje de depuración
          }
        },
        (error) => {
          console.error('Error fetching profiles', error);
        }
      );
    }
  }
  logout() {
    this.authService.logOut();
    console.log('Sesión cerrada');
    this.router.navigate(['/login']);
  }

  changePassword() {
    this.router.navigate(['/change-password']);
  }

  viewEnrollments() {
    this.router.navigate(['/enrollments']);
  }



  /*uploadProfileImage(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const file = inputElement.files?.[0];

    if (file) {
      // Aquí puedes implementar la lógica para guardar la imagen en tu solución de almacenamiento (Firebase Storage, servidor, etc.)

      // Por ahora, simplemente la mostramos en la vista
      const reader = new FileReader();
      reader.onload = () => {
        this.userPhotoURL = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }*/

}
