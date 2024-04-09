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

  gelleryHeroe: (string | number | null)[] = [];
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

  async ngOnInit() {
    let gellery: (string | number | null)[] = [];
    gellery = await this.data.getGalleryHeroe(this.id);
    this.gelleryHeroe = gellery.filter(item => item !== null) // Filtrar los elementos que son diferentes de null
    .map(item => (item as any).IdMultimedia.url); // Acceder a la propiedad IdMultimedia.url de manera segura

    console.log("heroe en el oninit",this.gelleryHeroe)
    //console.log(this.gelleryHeroe.map(item=> item.Nombre));
    this.Nombre = gellery.values().next().value.IdHeroe.nombre;
  }


  verHeroe( idx:number ){
    this.router.navigate( ['/gellery',idx] );
  }

}
