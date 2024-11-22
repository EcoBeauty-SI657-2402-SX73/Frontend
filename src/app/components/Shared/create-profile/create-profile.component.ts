import { Component, NgModule } from '@angular/core';
import { Student } from 'src/app/core/models/student.model';
import { StudentsService } from 'src/app/core/services/students.service';
import { CommonModule } from '@angular/common';
import { NgForm } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.scss'],
})
export class CreateProfileComponent {
  profile: Student = {
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    number: '',
    city: '',
    postalCode: '',
    country: ''
  };

  constructor(private studentsService: StudentsService, private snackBar: MatSnackBar) {}

  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.studentsService.createStudent(this.profile).subscribe(response => {
      console.log('Profile and Student created successfully', response);
      this.snackBar.open('Perfil creado correctamente', 'Cerrar', {
        duration: 3000, // Duración en milisegundos
      });
      // Handle success response
    }, error => {
      console.error('Error creating profile and student', error);
      this.snackBar.open('Error al crear perfil', 'Cerrar', {
        duration: 3000, // Duración en milisegundos
      });
      // Handle error response
    });
  }
}