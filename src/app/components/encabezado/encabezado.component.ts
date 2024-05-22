import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeroesBDService } from 'src/app/services/heroes-bd.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent {
  //tipodatos!:string;

  query: string = '';

  titulo:string = "¡HEROES DC & MARVEL!";

  constructor(private searchService: HeroesBDService){
    this.titulo = this.titulo;

    console.log(this.titulo);

  }

  onSearch() {
    this.searchService.updateSearchQuery(this.query);
  }

  // buscarHeroe( termino:string ){


  //   this.tipodatos = GlobalConstants.tipodatos;


  //   // console.log(termino);
  //   this.router.navigate( ['/buscar',termino,this.tipodatos] );
  // }
  // buscarHeroe( termino:string ){


  //   this.tipodatos = GlobalConstants.tipodatos;


  //   // console.log(termino);
  //   this.router.navigate( ['/buscar',termino,this.tipodatos] );
  // }
}
