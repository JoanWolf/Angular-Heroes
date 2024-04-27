import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { heroe } from 'src/app/interfaces/heroe.interface';
import { HeroesBDService } from 'src/app/services/heroes-bd.service';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-list-heroes',
  templateUrl: './list-heroes.component.html',
  styleUrls: ['./list-heroes.component.css'],
})
export class ListHeroesComponent {
  visualizacion: string = 'grid';
  cargando: boolean = false;
  infoHeroesBD: any;
  @Input() heroe: any ={};
  heroes: heroe[] = [];

  // constructor( private data:HeroesService){
  //    this.heroes = data.getHeroes();
  //    console.log(this.heroes);
  // }

  constructor(
    private _heroesService: HeroesService,
    private router: Router,
    private dataBD: HeroesBDService
  ) {}
  verHeroe(id:number) {
    //console.log(  id,this.heroe.id);
    this.router.navigate( ['listmultheroe/',id] );
    //this.heroeSeleccionado.emit( this.heroe.id);
  }
  ngOnInit() {
    this.heroes = this._heroesService.getHeroes();

    //this.cargarHeroesV1();

    this.cargarData();

    console.log('oninit', this.infoHeroesBD);
  }

  async cargarData() {
    await this.cargarHeroesV1();
  }

  async cargarHeroesV1() {
    this.cargando = true;
    await this.dataBD
      .getHeroes()
      .toPromise()
      .then((resp: any) => {
        //this.heroes = resp.data;
        //la linea anterior cambiarla asi:
        //ya que los Datos vienen en la resp
        this.infoHeroesBD = resp.resp;

        console.log('Datos nuevos ', this.infoHeroesBD);

        this.cargando = false;
      });
  }
}
