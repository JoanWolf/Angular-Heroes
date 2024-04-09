import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { heroe } from 'src/app/interfaces/heroe.interface';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  heroes:heroe[] = [];

  constructor( private data:HeroesService){
     this.heroes = data.getHeroes();
     console.log(this.heroes);
  }
}
