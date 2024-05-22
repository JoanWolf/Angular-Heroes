import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { heroe } from 'src/app/interfaces/heroe.interface';
import { HeroesBDService } from 'src/app/services/heroes-bd.service';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent {
  heroes: heroe[] = [];
  filteredHeroes: heroe[] = [];

  constructor(private searchService: HeroesBDService, private heroeService: HeroesBDService) {}

  ngOnInit() {
    this.heroeService.getHeroes().subscribe((heroes: heroe[]) => {
      this.heroes = heroes;
      this.filteredHeroes = heroes;
    });

    this.searchService.currentQuery.subscribe(query => {
      this.filteredHeroes = this.heroes.filter(heroe =>
        heroe.nombre.toLowerCase().includes(query.toLowerCase()));
    })};

  // heroes:any[] = []
  // termino!:string;
  // tipodatos!:string;


  // cargando:boolean = false;


  // constructor( private activatedRoute:ActivatedRoute,


  //              private dataBD: HeroesBDService,

  //              private router:Router
  //             ) {


  // }


  // ngOnInit() {


  //   this.activatedRoute.params.subscribe( params =>{
  //     this.termino = params['termino'];
  //     this.tipodatos = params['tipodatos'];


  //     //Cargar Datps a Mostrar
  //     this.cargarData();


  //   });


  // }




  // async cargarData() {


  //   if (this.tipodatos == 'bd'){
  //     await this.cargarHeroes();
  //     console.log(this.heroes);
  //     }
  //   else {
  //     //this.heroes = this._heroesService.buscarHeroes( this.termino);
  //   }
  // }




  // async cargarHeroes() {
  //   this.cargando = true;
  //   await this.dataBD
  //     .buscarHeroes(this.termino)
  //     .toPromise()
  //     .then((resp: any) => {
  //       console.log(resp);
  //       this.heroes = resp.results;


  //       this.cargando = false;
  //     });
  // }




}
