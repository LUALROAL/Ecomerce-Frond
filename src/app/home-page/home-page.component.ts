import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CarouselModule } from 'ngx-bootstrap/carousel'
import { CarouselModule as owlCarouselModule } from 'ngx-owl-carousel-o';
import {MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-page',
  standalone: true,
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
  imports:[
    CommonModule,
    CarouselModule,
    owlCarouselModule,
    MatCardModule
  ]
})
export class HomePageComponent {
  myInterval:number=1000

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: false,
    autoplay:true,
    autoplaySpeed:1000
  }
  slidesStore:any[]=[
    {
      id:'1',
      src:'https://poluxstudios.com/wp-content/uploads/2022/11/Matera-Grande-tipo-palmera.jpg',
      alt:'Palmas',
      title:'Palmas'
    },
    {
      id:'2',
      src:'https://thafd.bing.com/th/id/OIP.Q0oQ_yv9MDFYNJFsh5MswwHaHJ?w=1920&h=1855&rs=1&pid=ImgDetMain',
      alt:'Bonsais',
      title:'Bonsais'
    },
    {
      id:'3',
      src:'https://thafd.bing.com/th/id/OIP.3lfdNCKO8dRMRYLYiPQxoQHaHa?w=1200&h=1200&rs=1&pid=ImgDetMain',
      alt:'Pinos',
      title:'Pinos'
    },
    {
      id:'3',
      src:'https://jardineros.com.co/wp-content/uploads/2022/04/Flor-de-navidad-en-matera-blanca-rombos.jpg',
      alt:'Flor',
      title:'Plantas con flor'
    }
  ]
}
