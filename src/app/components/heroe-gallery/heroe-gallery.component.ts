import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-heroe-gallery',
  templateUrl: './heroe-gallery.component.html',
  styleUrls: ['./heroe-gallery.component.css']
})
export class HeroeGalleryComponent {

  @Input() galleryheroes: any = {};
  id!:number;
  url!:string;
  idHeroe!:number;


  constructor( private activatedRoute: ActivatedRoute){
    this.activatedRoute.params.subscribe(params => {

      this.idHeroe = params['idHeroe'];

      console.log("DATA", this.id);


    });

  }
}
