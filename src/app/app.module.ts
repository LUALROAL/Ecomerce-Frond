import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LayoutModule } from './layout/layout.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BASE_API, BASE_IMAGE_API } from './core/token/baseUrl.token';
import { environment } from '../environments/environment.development';
import { HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient, withFetch, withInterceptorsFromDi } from '@angular/common/http';
import { ApiInterceptor } from './core/interceptor/api.interceptor';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { store } from './redux/store';
import { CatalogEffects } from './redux/catalog/catalog.effects';
import { CatalogService } from './core/Services/catalog.service';
import { setTheme } from 'ngx-bootstrap/utils';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(store),
    EffectsModule.forRoot([]),
    EffectsModule.forFeature([CatalogEffects])
  ],
  providers: [
    {
      provide:BASE_API,
      useValue:environment.apiUrl
    },

    {
      provide:BASE_IMAGE_API,
      useValue:environment.imageBaseApi
    },

    {
      provide:HTTP_INTERCEPTORS,
      useClass:ApiInterceptor,
      multi:true
    },
    // Reemplazo de HttpClientModule
    provideHttpClient(
      withFetch(),
      withInterceptorsFromDi()),
    CatalogService

  ],
  bootstrap: [AppComponent]
})
export class AppModule {

 }


