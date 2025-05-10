import { Component, Inject } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CarouselModule } from 'ngx-bootstrap/carousel'
import { CarouselModule as owlCarouselModule } from 'ngx-owl-carousel-o';
import {MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { setTheme } from 'ngx-bootstrap/utils';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CategoriesResDto } from '../core/Models/catalog';
import { selectCategories } from '../redux/catalog/catalog.selectot';
import { AppState } from '../redux/store';
import { BASE_IMAGE_API } from '../core/token/baseUrl.token';

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
categories$:Observable<CategoriesResDto[] | null>;
   constructor(private store: Store<AppState>,@Inject(BASE_IMAGE_API) public serverApi:string) {
     this.categories$ = this.store.select(selectCategories);
     setTheme('bs5'); // O use 'bs4' si su proyecto usa Bootstrap 4

   }

  //  bannerOptions: OwlOptions = {
  //   loop: true,
  //   mouseDrag: false,
  //   touchDrag: false,
  //   pullDrag: false,
  //   dots: false,
  //   navSpeed: 700,
  //   navText: ['', ''],
  //   responsive: {
  //     0: {
  //       items: 1
  //     },
  //     400: {
  //       items: 2
  //     },
  //     740: {
  //       items: 3
  //     },
  //     940: {
  //       items: 4
  //     }
  //   },
  //   nav: false,
  //   autoplay:true,
  //   autoplaySpeed:1000
  // }


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

}
