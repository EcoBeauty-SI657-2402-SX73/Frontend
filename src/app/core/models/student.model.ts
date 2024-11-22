export interface Student {
    firstName: string;
    lastName: string;
    email: string;
    street: string;
    number: string;
    city: string;
    postalCode: string;
    country: string;
    profileId?: string;
}

export interface ProfileResponse {
    id: string;
    fullName: string;
    email: string;
    streetAddress: string;
  }

export interface StudentResponse {
    acmeStudentRecordId: any;
    profileId: any;
    totalCompletedCourses: any;
    totalTutorials: any;
}