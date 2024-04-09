import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { galleryheroes } from 'src/app/interfaces/galleryheroes.interface';
import { GalleryheroesService } from 'src/app/services/gallery/galleryheroes.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {

  gelleryHeroe:galleryheroes[] = [];
  id!:number;
  Nombre?: string="";
  constructor( private data:GalleryheroesService,private activatedRoute: ActivatedRoute,private router:Router){
     this.gelleryHeroe = data.getGalleryHeroes();
     console.log(this.gelleryHeroe);



     this.activatedRoute.params.subscribe(params => {

      this.id = params['idHeroe'];

      console.log("DATA", this.id);


    });
  }

  ngOnInit() {
    this.gelleryHeroe = this.data.getGalleryHeroe(this.id);
    console.log(this.gelleryHeroe.map(item=> item.Nombre));
    this.Nombre = this.gelleryHeroe.values().next().value.Nombre;
  }

  verHeroe( idx:number ){
    this.router.navigate( ['/gellery',idx] );
  }

}
