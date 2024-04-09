import { Injectable } from '@angular/core';
import{galleryheroes} from '../../interfaces/galleryheroes.interface'

@Injectable({
  providedIn: 'root'
})
export class GalleryheroesService {

  private galleryheroes:galleryheroes[] = [
    {
      url: "https://s3.amazonaws.com/dam.smashmexico.com.mx/wp-content/uploads/2023/03/Green-Lantern-Renacimiento-cover.jpg",
      id: 15,
      idHeroe: 5,
      Nombre:"Linterna Verde"
    },

    {
      url: "https://assets.mycast.io/characters/green-lantern-kingdom-come-1359573-normal.jpg?1609923068",
      id: 155,
      idHeroe: 5,
      Nombre:"Linterna Verde"
    },

    {
      url: "https://bibliotecavilareal.files.wordpress.com/2011/07/green-lantern-vol-2-87.jpg",
      id: 1555,
      idHeroe: 5,
      Nombre:"Linterna Verde"
    },

    {
      url: "https://i.pinimg.com/originals/71/3d/4b/713d4bb704e41f98e85725af4cd94049.jpg",
      id: 13,
      idHeroe: 3,
      Nombre:"Daredevil"
    },

    {
      url: "https://cdn.marvel.com/u/prod/marvel/i/mg/8/a0/641e08ceb131b/clean.jpg",
      id: 133,
      idHeroe: 3,
      Nombre:"Daredevil"
    },
  
    {
      url: "https://www.g-mart.com/static/f178265.jpg",
      id: 1333,
      idHeroe: 3,
      Nombre:"Daredevil"
    },

    {
      url: "https://i.ebayimg.com/images/g/SoEAAOxy~dNTJ3lS/s-l1600.jpg",
      id: 16,
      idHeroe: 6,
      Nombre:"Spider-Man"
    },

    {
      url: "https://i.pinimg.com/564x/e5/76/9c/e5769cabe9f7a112d4e14ce10f40db9c.jpg",
      id: 166,
      idHeroe: 6,
      Nombre:"Spider-Man"
    },

    {
      url: "https://i.pinimg.com/564x/a3/03/86/a303867e1578d78eeedca515dc96bcf8.jpg",
      id: 1666,
      idHeroe: 6,
      Nombre:"Spider-Man"
    },

    {
      url: "https://m.media-amazon.com/images/I/91VDZrvIOBL._AC_UF1000,1000_QL80_.jpg",
      id: 11,
      idHeroe: 1,
      Nombre: "Aquaman"
    },

    {
      url: "https://hips.hearstapps.com/hmg-prod/images/aquaman-75-anos-1557827245.jpg",
      id: 111,
      idHeroe: 1,
      Nombre: "Aquaman"
    },

    {
      url: "https://m.media-amazon.com/images/I/714hpQzIojL._AC_UF1000,1000_QL80_.jpg",
      id: 111,
      idHeroe: 1,
      Nombre: "Aquaman"
    },

    {
      url: "https://4.bp.blogspot.com/-OFTgWqptb3s/U0oBKheufjI/AAAAAAAAC9w/K9Ptgl6nPUI/s1600/Kingdom+Come+4-168+Never-Ending+Battle.jpg",
      id: 12,
      idHeroe: 2,
      Nombre: "Batman",
    },

    {
      url: "https://i.pinimg.com/564x/45/7b/51/457b513d2a778692087ca7bb6062e527.jpg",
      id: 122,
      idHeroe: 2,
      Nombre: "Batman",
    },

    {
      url: "https://arousinggrammardotcom.files.wordpress.com/2014/10/banebatmannew3.jpg",
      id: 1222,
      idHeroe: 2,
      Nombre: "Batman",
    },

    {
      url: "https://cdn.marvel.com/u/prod/marvel/i/mg/d/30/645110735447c/detail.jpg",
      id: 14,
      idHeroe: 4,
      Nombre: "Hulk"
    },
    {
      url: "https://i.annihil.us/u/prod/marvel/i/mg/8/04/5ced997c7ccd9/clean.jpg",
      id: 14,
      idHeroe: 4,
      Nombre: "Hulk"
    },
    {
      url: "https://cdn.marvel.com/u/prod/marvel/i/mg/d/30/645110735447c/detail.jpg",
      id: 14,
      idHeroe: 4,
      Nombre: "Hulk"
    },
    {
      url: "https://cdn.marvel.com/u/prod/marvel/i/mg/d/30/645110735447c/detail.jpg",
      id: 14,
      idHeroe: 4,
      Nombre: "Hulk"
    },
    {
      url: "https://cdn.marvel.com/u/prod/marvel/i/mg/d/30/645110735447c/detail.jpg",
      id: 14,
      idHeroe: 4,
      Nombre: "Hulk"
    },
    {
      url: "https://cdn.marvel.com/u/prod/marvel/i/mg/d/30/645110735447c/detail.jpg",
      id: 14,
      idHeroe: 4,
      Nombre: "Hulk"
    },

    {
      url: "https://images-na.ssl-images-amazon.com/images/I/91EVpVK5qhL.jpg",
      id: 144,
      idHeroe: 4,
      Nombre: "Hulk"
    },
    {
      url: "https://images-na.ssl-images-amazon.com/images/I/91EVpVK5qhL.jpg",
      id: 144,
      idHeroe: 4,
      Nombre: "Hulk"
    },

  ];

  private galleryheroes2:galleryheroes[] = [];

  constructor() {


  }

  getGalleryHeroes():galleryheroes[]{
    return this.galleryheroes;

  }
  // getGalleryHeroe(idx:number):galleryheroes[]{
  //   console.log(idx)
  //   this.galleryheroes.forEach(x => {
  //     if (x.idHeroe === idx) {
  //       console.log(x.idHeroe)
  //       console.log(idx)
  //       this.galleryheroes2.push(x);
  //     }
  //   });

  //   return this.galleryheroes2;
  // }
  getGalleryHeroe(idx:number):galleryheroes[]{
    console.log(idx)
    let galleryArr:galleryheroes[] = [];
    let NombreHeroe="";
    for( let i = 0; i < this.galleryheroes.length; i ++ ){

      let heroe = this.galleryheroes[i];

      console.log(heroe);

      let id = heroe.idHeroe;
      console.log(id);
      console.log(idx);
      if(  idx == id  ){
        console.log('entre')
        console.log(heroe)
        NombreHeroe = heroe.Nombre
        galleryArr.push( heroe )
      }

    }

    return galleryArr;
  }


}
