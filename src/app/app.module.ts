import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './components/encabezado/encabezado.component';
import { HomeComponent } from './components/home/home.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { AboutComponent } from './components/about/about.component';
import { HeroeComponent } from './components/heroes/heroe/heroe.component';
import { HeroeTarjetaComponent } from './components/heroe-tarjeta/heroe-tarjeta.component';
import { FooterComponent } from './components/footer/footer.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { HeroeGalleryComponent } from './components/heroe-gallery/heroe-gallery.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { HttpClientModule } from '@angular/common/http';
import { ListHeroesComponent } from './components/ListaHeroes/list-heroes/list-heroes.component';
import { EditHeroesComponent } from './components/ListaHeroes/edit-heroes/edit-heroes.component';
import { EditMultheroesComponent } from './components/ListaHeroes/ListaMultimediasHeroe/edit-multheroes/edit-multheroes.component';
import { ListMultheroesComponent } from './components/ListaHeroes/ListaMultimediasHeroe/list-multheroes/list-multheroes.component';
import { ListMultimediasComponent } from './components/ListaMultimedias/list-multimedias/list-multimedias.component';
import { EditMultimediasComponent } from './components/ListaMultimedias/edit-multimedias/edit-multimedias.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import Swal from 'sweetalert2';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    HomeComponent,
    HeroesComponent,
    AboutComponent,
    HeroeComponent,
    HeroeTarjetaComponent,
    FooterComponent,
    BuscadorComponent,
    HeroeGalleryComponent,
    GalleryComponent,
    ListHeroesComponent,
    EditHeroesComponent,
    EditMultheroesComponent,
    ListMultheroesComponent,
    ListMultimediasComponent,
    EditMultimediasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //libreria
    HttpClientModule,
    SweetAlert2Module.forRoot(),
    //Aqui involucramos el Forms Module
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
