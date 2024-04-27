import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { HeroeGalleryComponent } from './components/heroe-gallery/heroe-gallery.component';
import { ListHeroesComponent } from './components/ListaHeroes/list-heroes/list-heroes.component';
import { EditHeroesComponent } from './components/ListaHeroes/edit-heroes/edit-heroes.component';
import { ListMultheroesComponent } from './components/ListaHeroes/ListaMultimediasHeroe/list-multheroes/list-multheroes.component';
import { EditMultheroesComponent } from './components/ListaHeroes/ListaMultimediasHeroe/edit-multheroes/edit-multheroes.component';
import { ListMultimediasComponent } from './components/ListaMultimedias/list-multimedias/list-multimedias.component';
import { EditMultimediasComponent } from './components/ListaMultimedias/edit-multimedias/edit-multimedias.component';



const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'listamultimedias', component: ListMultimediasComponent },
  { path: 'listaheroes', component: ListHeroesComponent },
  { path: 'editHeroes', component: EditHeroesComponent },
  { path: 'about', component: AboutComponent },
  { path: 'gellery', component: GalleryComponent },
  { path: 'heroegallery/:idHeroe', component: HeroeGalleryComponent},
  { path: 'gellery/:idHeroe', component: GalleryComponent },
  { path: 'listmultheroe/:idHeroe', component: ListMultheroesComponent },
  { path: 'editmultheroe/:idHeroe', component: EditHeroesComponent },
  { path: 'editHeroes/:idHeroe', component: EditHeroesComponent },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
