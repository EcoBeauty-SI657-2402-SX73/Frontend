import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { CourseModel } from '../models/course.model';
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root',
})
export class DbService {
  baseUrl = 'https://green-grow-421820.rj.r.appspot.com/api/green-grow/v1';
  //baseUrl = 'http://localhost:8000/api/green-grow/v1';

  constructor(private http: HttpClient, private authService: AuthService) {}
  token! : string;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.log(`An error ocurred ${error.status}, body was ${error.error}`);
    } else {
      console.log(
        `Backend returned code ${error.status}, body was ${error.error}`
      );
    }
    return throwError(
      'Something happened with request, please try again later'
    );
  }

  //GET
  getCourses() {
    return this.http.get<any[]>(this.baseUrl + '/courses');
  }

  //GET POSTS
  getPosts() {
    return this.http.get<any[]>(this.baseUrl + '/posts');
  }

  //GET TRENDS
  getTrends() {
    return this.http.get<any[]>(this.baseUrl + '/trends');
  }

  // POST POSTS
  createPost(post: any) {
    return this.http.post<any>(this.baseUrl + '/posts', post, this.httpOptions);
  }

  private posts = [
    {
      author: "Laura Martínez",
      comments: [
        { author: "User1", date: "10/11/2024", text: "¡Me encanta esta receta! La probaré este fin de semana." },
        { author: "User2", date: "10/12/2024", text: "¿Puedo usar otro tipo de aceite en lugar de aceite de oliva?" }
      ],
      date: "10/10/2024",
      description: "Crea tu propia crema facial natural con aloe vera y aceite de oliva.",
      id: 1,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDoVDfpNhUUDg6KNjuEsgcTvd1Y2xOzBWPww&s",
      likes: 120,
      tags: ["cosmética natural", "aloe vera"],
      title: "Crema facial natural de aloe vera",
      views: 320
    },
    {
      author: "Juan Pérez",
      comments: [
        { author: "User3", date: "9/23/2024", text: "¡Qué buena idea! Me encanta el exfoliante de café." },
        { author: "User4", date: "9/24/2024", text: "¿Cuánto tiempo dura este exfoliante?" }
      ],
      date: "9/22/2024",
      description: "Guía para hacer un exfoliante corporal casero con café y azúcar.",
      id: 2,
      image: "https://yosoysoler.com/cdn/shop/articles/exfoliante-casero.jpg?v=1563853348",
      likes: 78,
      tags: ["cosmética casera", "exfoliante"],
      title: "Exfoliante corporal casero de café",
      views: 150
    },
    {
      author: "Sofía Torres",
      comments: [
        { author: "User5", date: "9/16/2024", text: "¡Funciona de maravilla! Gracias por compartir." },
        { author: "User6", date: "9/17/2024", text: "¿Puedo usar aceites esenciales diferentes?" }
      ],
      date: "9/15/2024",
      description: "Cómo hacer un desodorante natural con bicarbonato y aceites esenciales.",
      id: 3,
      image: "https://www.ecolatras.es/archivos/varios/1685527558.jpg",
      likes: 190,
      tags: ["desodorante", "cosmética casera"],
      title: "Desodorante natural casero",
      views: 450
    },
    {
      author: "Carlos Ramírez",
      comments: [
        { author: "User7", date: "8/31/2024", text: "¡Mi cabello se siente increíble después de usar esta mascarilla!" },
        { author: "User8", date: "9/01/2024", text: "¿Con qué frecuencia debo usarla?" }
      ],
      date: "8/30/2024",
      description: "Mejora tu rutina de cuidado capilar con esta mascarilla de palta.",
      id: 4,
      image: "https://images.ecestaticos.com/J0I6LpZm_GVzWuH-6TB8OGyhN3Q=/92x0:985x1078/1200x1200/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F179%2Fc72%2Fa6b%2F179c72a6bde3b1ee99560fb93a5c271a.jpg",
      likes: 95,
      tags: ["cuidado capilar", "cosmética natural"],
      title: "Mascarilla capilar de aguacate",
      views: 210
    },
    {
      author: "María López",
      comments: [
        { author: "User9", date: "7/21/2024", text: "¡Este jabón es perfecto para mi piel sensible!" },
        { author: "User10", date: "7/22/2024", text: "¿Puedo agregarle algún aroma?" }
      ],
      date: "7/20/2024",
      description: "Receta de jabón artesanal de avena y miel para piel sensible.",
      id: 6,
      image: "https://www.limaorganica.pe/wp-content/uploads/2020/05/esacare-avena-nacar-1-700x460.jpg.webp",
      likes: 160,
      tags: ["jabón", "cosmética natural"],
      title: "Jabón artesanal de avena y miel",
      views: 320
    },
    {
      author: "Elena Fernández",
      comments: [
        { author: "User11", date: "7/11/2024", text: "¡Me encanta este labial! Es muy hidratante." },
        { author: "User12", date: "7/12/2024", text: "¿Puedo usar otro tipo de cera?" }
      ],
      date: "7/10/2024",
      description: "Cómo hacer una barra de labios casera con cera de abeja y aceite de coco.",
      id: 7,
      image: "https://es.nuxe.com/cdn/shop/files/3264680004117-VN060102-VIEW3-LIFESTYLE-STICK_LEVRES-TEXTURE-2024-2000x2000.jpg?v=1718012353&width=2000",
      likes: 200,
      tags: ["labial", "cosmética natural"],
      title: "Barra de labios casera natural",
      views: 500
    },
    {
      author: "Roberto Díaz",
      comments: [
        { author: "User13", date: "6/29/2024", text: "El aceite de coco es increíble para la piel." },
        { author: "User14", date: "6/30/2024", text: "¿Puedo usarlo en el cabello también?" }
      ],
      date: "6/28/2024",
      description: "Los beneficios del aceite de coco en la cosmética natural.",
      id: 8,
      image: "https://ecotiendanatural.cl/cdn/shop/articles/14-CONOCE_EL_ACEITE_DE_COCO_NATURAL_UN_AMIGO_PERFECTO_Y_VERSATIL_600x600_crop_center.png?v=1646228925",
      likes: 175,
      tags: ["aceite de coco", "cosmética natural"],
      title: "Aceite de coco en cosmética natural",
      views: 380
    },
    {
      author: "Claudia Rodríguez",
      comments: [
        { author: "User15", date: "6/16/2024", text: "¡Esta loción es muy hidratante!" },
        { author: "User16", date: "6/17/2024", text: "¿Puedo usar manteca de cacao en lugar de manteca de karité?" }
      ],
      date: "6/15/2024",
      description: "Cómo hacer una loción hidratante casera con manteca de karité.",
      id: 9,
      image: "https://image.tuasaude.com/media/article/bc/4l/solucao-caseira-para-pele-seca-e-extra-seca_14896_l.jpg",
      likes: 150,
      tags: ["loción", "manteca de karité"],
      title: "Loción hidratante casera de manteca de karité",
      views: 250
    },
    {
      author: "Ana Suárez",
      comments: [
        { author: "User17", date: "5/31/2024", text: "¡Me encanta hacer mis propios perfumes!" },
        { author: "User18", date: "6/01/2024", text: "¿Cuáles son tus aceites esenciales favoritos?" }
      ],
      date: "5/30/2024",
      description: "Los mejores aceites esenciales para hacer tu propio perfume natural.",
      id: 10,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk0kWUa1k3tUASFlMZQvmzdeIcofWmLRtNKg&s",
      likes: 220,
      tags: ["perfume", "aceites esenciales"],
      title: "Perfume natural casero con aceites esenciales",
      views: 530
    }
  ]

  getPostById(id: number): Observable<any> {
    const post = this.posts.find(p => p.id === id);
    return new Observable(observer => {
      if (post) {
        observer.next(post);
        observer.complete();
      } else {
        observer.error('Post not found');
      }
    });
  }
}
