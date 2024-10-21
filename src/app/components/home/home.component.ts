import { Component, OnInit, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { AuthService } from 'src/app/core/services/auth.service';
import { DbService } from 'src/app/core/services/db.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import {MatExpansionModule} from "@angular/material/expansion";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [MatButtonModule, MatCardModule, MatDividerModule, MatIconModule, CommonModule, MatExpansionModule]
})
export class HomeComponent {

  team = [
    {
      name: 'Aldo Baldeon',
      image: 'assets/Aldo.jpg'
    },
    {
      name: 'Joaquin Rivadeneyra',
      image: 'assets/Joaquin_foto.PNG'
    },
    {
      name: 'Paolo Martinez',
      image: 'assets/Paolo_foto.PNG'
    },
    {
      name: 'Lorenzo Navarro',
      image: 'assets/Lorenzo_foto.PNG'
    },
    {
      name: 'Sebastian Castro',
      image: 'assets/Sebastian_foto.PNG'
    }
  ];

  reviews = [
    {
      user: 'Carlos Lopez',
      date: '10/10/2023',
      text: '“Esta plataforma me ha cambiado la vida. Siempre quise aprender a hacer mis propios productos de belleza, pero no sabía por dónde empezar. Los tutoriales son muy detallados y fáciles de seguir, y he podido crear cosméticos completamente naturales y personalizados. ¡Es una excelente forma de ahorrar y cuidar mi piel al mismo tiempo!”',
      image: 'https://i.pinimg.com/564x/cb/5d/64/cb5d64be736ab84602ee1bcd20303d4e.jpg',
      stars: [1, 1, 1, 1, 1]
    },
    {
      user: 'Chris Andrade',
      date: '12/10/2023',
      text: '"Me encantan los tutoriales sobre cómo hacer cosméticos naturales. Siempre he estado preocupado por los\n' +
        '                  productos químicos en las cremas comerciales, pero con esta plataforma he aprendido a hacer mis propios\n' +
        '                  productos de forma segura. ¡Recomiendo a todos los interesados en la belleza natural que lo prueben!"',
      image: 'https://i.pinimg.com/564x/74/75/f2/7475f21219dbad49b5e30a5d2041f816.jpg',
      stars: [1, 1, 1, 1, 1]
    },
    {
      user: 'Jahana Perez',
      date: '15/10/2023',
      text: '"Gracias a esta plataforma, he aprendido a hacer mis propios jabones y cremas. Los videos explican paso a paso el\n' +
        '                  proceso, y he notado una gran mejora en la calidad de mi piel desde que uso productos naturales hechos por mí\n' +
        '                  misma. ¡Es increíble!"',
      image: 'https://i.pinimg.com/736x/d5/ec/73/d5ec73a8c387e093e05aa82d762c6183.jpg',
      stars: [1, 1, 1, 1, 1]
    },
    {
      user: 'Marco Torres',
      date: '15/10/2023',
      text: '"Estoy impresionado por la calidad de los tutoriales. Los ingredientes son fáciles de conseguir y las recetas\n' +
        '                  están muy bien explicadas. Ahora puedo hacer mis propios bálsamos y cremas en casa, ¡y estoy pensando en empezar\n' +
        '                  mi propio negocio de cosméticos artesanales!"',
      image: 'https://i.pinimg.com/564x/22/a7/e9/22a7e97c6be7256fc40a9afdff80a4af.jpg',
      stars: [1, 1, 1, 1, 1]
    },
    {
      user: 'Maria Linares',
      date: '15/10/2023',
      text: '"Esta plataforma me ha permitido desarrollar nuevas habilidades y hacer cosméticos personalizados para mí y mi\n' +
        '                  familia. Los videos son claros y están muy bien estructurados. Ahora puedo hacer cremas, jabones y exfoliantes\n' +
        '                  naturales. ¡Súper recomendada!"',
      image: 'https://i.pinimg.com/564x/e2/3f/44/e23f448ab0ffb09ba53e00318d4fb3ed.jpg',
      stars: [1, 1, 1, 1, 1]
    }
  ];

  currentReviewIndex = 0;

  faq = [
    {
      question: '¿Qué es esta plataforma de tutoriales de cosméticos artesanales?',
      answer: 'Nuestra plataforma te ofrece una amplia variedad de tutoriales para aprender a crear tus propios cosméticos artesanales, desde lociones y cremas hasta jabones y exfoliantes, utilizando ingredientes naturales y sostenibles. Es ideal para quienes buscan productos personalizados y respetuosos con el medio ambiente.'
    },
    {
      question: '¿Cómo puedo acceder a los tutoriales?',
      answer: 'Para acceder a nuestros tutoriales, sigue estos pasos:\n' +
        '\n' +
        '1. Regístrate o inicia sesión en la plataforma.\n' +
        '\n' +
        '2. Dirígete a la sección "Tutoriales".\n' +
        '\n' +
        '3. Explora los tutoriales disponibles según el tipo de cosmético que te interesa elaborar.\n' +
        '\n' +
        '4. Selecciona un tutorial y sigue las instrucciones detalladas en video o texto para crear tu cosmético artesanal.'
    },
    {
      question: '¿Qué materiales necesito para empezar?',
      answer: 'Dependiendo del tipo de cosmético que desees crear, los materiales varían. En cada tutorial se indica una lista detallada de ingredientes y herramientas necesarias. Generalmente necesitarás aceites esenciales, mantecas naturales, y moldes para jabones o cremas, entre otros.'
    },
    {
      question: '¿Puedo vender los cosméticos que aprendo a hacer aquí?',
      answer: '¡Por supuesto! Nuestros tutoriales están diseñados tanto para uso personal como para emprendedores que quieran iniciar su propio negocio de cosméticos artesanales. Te brindamos las bases para que puedas desarrollar tus productos y empezar a comercializarlos.'
    },
    {
      question: '¿Cómo puedo resolver dudas sobre un tutorial?',
      answer: 'Si tienes dudas durante la elaboración de algún cosmético, puedes hacer lo siguiente:\n' +
        '\n' +
        '1. Visita la sección de comentarios del tutorial y revisa si otros usuarios ya han planteado tu duda.\n' +
        '\n' +
        '2. Si no encuentras una respuesta, puedes dejar tu pregunta y nuestro equipo o la comunidad te responderán lo antes posible.\n' +
        '\n' +
        '3. También puedes contactarnos directamente a través de nuestro centro de soporte.'
    },
    {
      question: '¿Es necesario tener experiencia previa en la creación de cosméticos?',
      answer: 'No, nuestra plataforma está diseñada tanto para principiantes como para personas con experiencia. Tenemos tutoriales para todos los niveles, desde los más básicos hasta técnicas avanzadas de cosmética artesanal.'
    },
    {
      question: '¿Puedo acceder a los tutoriales sin conexión a internet?',
      answer: 'Actualmente, nuestra plataforma requiere una conexión a internet para acceder a los tutoriales. Sin embargo, estamos trabajando en una opción para descargar los videos y poder verlos sin conexión en el futuro.'
    },
    {
      question: '¿Hay algún costo para acceder a los tutoriales?',
      answer: 'Ofrecemos acceso gratuito a algunos tutoriales básicos. Sin embargo, también contamos con un plan premium que te da acceso a tutoriales exclusivos, materiales descargables, y soporte prioritario.'
    },
    {
      question: '¿Cómo puedo contactar al soporte si tengo problemas?',
      answer: 'Si necesitas ayuda, puedes contactarnos a través de:\n' +
        '\n' +
        '- Correo electrónico: soporte@cosmeticaartesanal.com'
    },
    {
      question: '¿Cómo puedo eliminar mi cuenta?',
      answer: 'Si deseas eliminar tu cuenta, sigue estos pasos:\n' +
        '\n' +
        '1. Ve a "Configuración de la cuenta".\n' +
        '\n' +
        '2. Selecciona "Eliminar cuenta".\n' +
        '\n' +
        '3. Confirma tu decisión. Ten en cuenta que esta acción es irreversible y todos tus datos serán eliminados permanentemente.'
    }
  ];

  private _router = inject(Router);

  private authservice = inject(AuthService);


  constructor(private dbService: DbService) {}

  async logOut(): Promise<void> {
    try {
      await this.authservice.logOut();
      this._router.navigateByUrl('/auth/log-in');
    } catch (error) {
      console.log(error);
    }
  }


  ngOnInit(): void {

  }

  nextReview(): void {
    this.currentReviewIndex = (this.currentReviewIndex + 1) % this.reviews.length;
  }

  prevReview(): void {
    this.currentReviewIndex = (this.currentReviewIndex - 1 + this.reviews.length) % this.reviews.length;
  }


}

