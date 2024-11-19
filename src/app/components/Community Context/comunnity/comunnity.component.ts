import { Component } from '@angular/core';
import { DbService } from 'src/app/core/services/db.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-comunnity',
  templateUrl: './comunnity.component.html',
  styleUrls: ['./comunnity.component.scss']
})
export class ComunnityComponent {

  posts: any[] = [];
  postsFalse: any[] = [
    {
      author: "Laura Martínez",
      comments: 8,
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
      comments: 2,
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
      comments: 10,
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
      comments: 3,
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
      comments: 6,
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
      comments: 12,
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
      comments: 9,
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
      comments: 5,
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
      comments: 7,
      date: "5/30/2024",
      description: "Los mejores aceites esenciales para hacer tu propio perfume natural.",
      id: 10,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk0kWUa1k3tUASFlMZQvmzdeIcofWmLRtNKg&s",
      likes: 220,
      tags: ["perfume", "aceites esenciales"],
      title: "Perfume natural casero con aceites esenciales",
      views: 530
    }
  ];

  trends: any[] = [];

  constructor(private dbService: DbService, private router: Router) {}

  ngOnInit(): void {
    this.getPosts();
    this.getTrends();
  }

  getPosts() {
    this.dbService.getPosts().subscribe((data: any[]) => {
      this.posts = data;
    });
  }

  getTrends() {
    this.dbService.getTrends().subscribe((data: any[]) => {
      this.trends = data;
    });
  }

  viewPostDetail(postId: number) {
    this.router.navigate(['/posts-detail', postId]);
  }
}
