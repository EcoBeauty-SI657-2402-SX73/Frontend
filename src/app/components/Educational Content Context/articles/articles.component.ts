import {Component, OnInit} from '@angular/core';
import { NewsService } from 'src/app/core/services/news.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
})

export class ArticlesComponent implements OnInit {
  articles: any[] = [];
  articleInit: any = ""
  loading: boolean = true
  // Lista provisional de artículos
  mockArticles: any[] = [
    {
      id: 0,
      imagen: "https://image.tuasaude.com/media/article/bc/4l/solucao-caseira-para-pele-seca-e-extra-seca_14896_l.jpg",
      titulo: "Cómo Hacer Tu Propia Crema Hidratante con Ingredientes Naturales",
      fecha: "2024-10-20",
      descripcion: "Descubre cómo hacer una crema hidratante casera utilizando productos totalmente naturales como aceite de coco, manteca de karité y cera de abejas. Ideal para pieles secas y sensibles.",
      enlace: "https://www.ecologiaverde.com/como-hacer-crema-hidratante-natural-1351.html"
    },
    {
      id: 1,
      imagen: "https://t1.uc.ltmcdn.com/es/posts/6/7/5/como_hacer_balsamo_labial_casero_28576_orig.jpg",
      titulo: "Receta de Bálsamo Labial Casero con Menta y Miel",
      fecha: "2024-10-19",
      descripcion: "Aprende a hacer tu propio bálsamo labial hidratante con ingredientes simples como cera de abejas, aceite de coco y aceite esencial de menta.",
      enlace: "https://www.buleomiel.com/balsamo-labial-de-miel-y-menta/"
    },
    {
      id: 2,
      imagen: "https://yosoysoler.com/cdn/shop/articles/exfoliante-casero.jpg?v=1563853348",
      titulo: "Cómo Preparar un Exfoliante Corporal de Café y Azúcar",
      fecha: "2024-10-18",
      descripcion: "Esta receta casera de exfoliante corporal te ayudará a eliminar las células muertas y dejar tu piel suave y radiante utilizando café molido, azúcar y aceite de oliva.",
      enlace: "https://www.vitamixespana.com/recetas/sin-categorizar/exfoliante-natural-cafe-azucar/?srsltid=AfmBOoogfYobY-GjK_37ig0AxHRTWNgMmYSP9KE9OAYdITZjVAwCMxAU"
    },
    {
      id: 3,
      imagen: "https://elevenobi.com/wp-content/uploads/2023/01/organic-cosmetics-ingredients-with-a-natural-background.jpg",
      titulo: "Noticias: Cosmética Natural Casera, la Tendencia que Revoluciona el Cuidado Personal",
      fecha: "2024-10-17",
      descripcion: "Explora cómo el auge del bricolaje en cosmética natural está ganando popularidad en todo el mundo, con más personas optando por productos caseros para el cuidado de su piel.",
      enlace: "https://www.essenciales.com/blog/descubre-la-revolucion-de-la-belleza-cosmetica-natural-para-una-piel-radiante-y-una-salud-resplandeciente/?srsltid=AfmBOorBojzRljrLLC0NovpFt0I2gUpxA0ZQcT-ETGMeIujWxGDhe-OJ"
    },
    {
      id: 4,
      imagen: "https://www.ecolatras.es/archivos/varios/1685527558.jpg",
      titulo: "Receta Casera de Desodorante Natural con Bicarbonato y Aceites Esenciales",
      fecha: "2024-10-16",
      descripcion: "Este desodorante casero es una alternativa natural a los productos convencionales. Con bicarbonato de sodio, aceite de coco y aceites esenciales, es perfecto para quienes buscan soluciones libres de químicos.",
      enlace: "https://www.kumir.pe/products/desodorante-natural-y-organico?srsltid=AfmBOoqJbPQDSKRGqttckHhDGNuKUlmUVc4J906l4I_3BmfgbOyfpdnr"
    }
  ];

  // constructor(private articlesService: NewsService) {}

  ngOnInit() {

    this.articles = this.mockArticles;
    this.articleInit = this.mockArticles[1];

    // this.getArticles();
  }

  // getArticles()
  // {
  //   this.articlesService.getListArticles().subscribe((data: any) => {
  //     this.articles = data
  //     this.articleInit = data[0]
  //     this.loading = false
  //   })
  // }
}
