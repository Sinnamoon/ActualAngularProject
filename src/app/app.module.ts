import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CarouselComponent } from './carousel/carousel.component';
import { MapComponent } from './map/map.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { GetArticlePipe } from './get-article.pipe';
import { GetImagePipe } from './get-image.pipe';
import { ArticleComponent } from './article/article.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    MapComponent,
    HeaderComponent,
    LoginComponent,
    GetArticlePipe,
    GetImagePipe,
    ArticleComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    RouterModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
