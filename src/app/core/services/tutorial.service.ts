import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TutorialModel } from '../models/tutorial.model';

@Injectable({
  providedIn: 'root'
})
export class TutorialsService {
  private tutorials: TutorialModel[] = [
    { id: 16, courseId: '1', name: 'DIY Natural Beauty Products', imageUrl: 'https://cnz.to/wp-content/uploads/2017/07/DIY-Cosmetics-Header-1.jpg', description: 'Aprende a hacer exfoliantes, cremas y aceites esenciales.', videoUrl: 'https://www.youtube.com/embed/q0bGf8vcCwE' },
    { id: 17, courseId: '1', name: 'Affordable Skincare Routine', imageUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjBtif6qOMnkA6HLVWXWRCBnZwRcQxPeJP_ayR6IGzbwR_uNg2hGILCzo7LUBn-2Nud8xysqS17VXKSnAyUH8Zkn-1zyR_WhntF09QdecqIBwUOyXgA_q24tt4UOgwInBF-YQyY2anxREro/s1080/Affordable+Skincare.jpg', description: 'Descubre recetas naturales para una rutina de cuidado diaria.', videoUrl: 'https://www.youtube.com/embed/ECuzOZCt0iw' },
    { id: 18, courseId: '2', name: 'Homemade Organic Beauty', imageUrl: 'https://img.freepik.com/premium-photo/nature-s-beauty-secrets-homemade-natural-cosmetics-organic-beauty-products_950053-4030.jpg', description: 'Ideas para maquillaje y cuidado orgánico hecho en casa.', videoUrl: 'https://www.youtube.com/embed/_hRoy-G4PG8' },
    { id: 19, courseId: '2', name: 'Anti-Aging Skin Care', imageUrl: 'https://drlongwillskincare.com/wp-content/uploads/2023/03/anti-aging-cream.jpg', description: 'Tutorial simple para combatir el envejecimiento con ingredientes naturales.', videoUrl: 'https://www.youtube.com/embed/jiCN1rtFfnI' },
    { id: 20, courseId: '3', name: 'Natural Beauty Hacks', imageUrl: 'https://ibsllc.net/wp-content/uploads/2021/12/Natural-Beauty-Products-that-You-Can-Prepare-at-Home-jpg-1.jpg', description: 'Aprende trucos caseros para el cuidado de la piel.', videoUrl: 'https://www.youtube.com/embed/GM85yPVdQLs' },
    { id: 21, courseId: '3', name: 'Homemade Skincare Recipes', imageUrl: 'https://www.ouroilyhouse.com/wp-content/uploads/2022/05/anti-aging-face-cream.png', description: 'Recetas prácticas para productos naturales.', videoUrl: 'https://www.youtube.com/embed/LUvlPirkHj4' },
    { id: 22, courseId: '4', name: 'Glowing Skin Remedies', imageUrl: 'https://images.hindustantimes.com/rf/image_size_960x540/HT/p2/2017/04/01/Pictures/_b3c69678-16a4-11e7-85c6-0f0e633c038c.jpg', description: 'Productos DIY para una piel radiante.', videoUrl: 'https://www.youtube.com/embed/Ke93Pk0ZwaI' },
    { id: 23, courseId: '4', name: 'DIY Body Scrubs', imageUrl: 'https://i.ytimg.com/vi/pnxlx_Bkbmc/maxresdefault.jpg', description: 'Fabrica exfoliantes corporales con ingredientes caseros.', videoUrl: 'https://www.youtube.com/embed/oKiVoyHXaTk' },
    { id: 24, courseId: '5', name: 'Skincare Solutions', imageUrl: 'https://dr-spiller.com/media/e2/35/9e/1708944342/drspiller_home_quality.webp', description: 'Soluciones para el cuidado de la piel sensibles.', videoUrl: 'https://www.youtube.com/embed/jiCN1rtFfnI' },
    { id: 25, courseId: '5', name: 'DIY Hair Care', imageUrl: 'https://adv-bio.com/wp-content/uploads/iStock-934918640.jpg', description: 'Cuida tu cabello con recetas simples y efectivas.', videoUrl: 'https://www.youtube.com/embed/GM85yPVdQLs' },
];


  getAllFakeTutorials(): Observable<TutorialModel[]> {
    return of(this.tutorials);
  }

  getFakeTutorialById(id: number): Observable<TutorialModel | undefined> {
    const tutorial = this.tutorials.find(t => t.id === id);
    return of(tutorial);
  }
}