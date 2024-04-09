import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent {
  @Input() heroe: any ={};

  constructor(private router: Router) {
  }

  verHeroe(id:number) {
    //console.log(  id,this.heroe.id);
    this.router.navigate( ['gellery/',id] );
    //this.heroeSeleccionado.emit( this.heroe.id);
  }
}
