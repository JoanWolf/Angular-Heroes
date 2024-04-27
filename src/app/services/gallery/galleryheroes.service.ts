import { Injectable } from '@angular/core';
import { galleryheroes } from '../../interfaces/galleryheroes.interface';
import { HeroesBDService } from '../heroes-bd.service';

@Injectable({
  providedIn: 'root',
})
export class GalleryheroesService {
  private galleryheroes: galleryheroes[] = [
    {
      url: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.elmundo.es%2Ftelevision%2Fprogramacion-tv%2Fpeliculas%2F3022510_green-lantern-linterna-verde.html&psig=AOvVaw0isZQC4csiNAo3sqVmbMbs&ust=1709778963991000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCPihkIPN3oQDFQAAAAAdAAAAABAE',
      id: 15,
      idHeroe: 5,
      Nombre: 'Linterna Verde',
    },

    {
      url: 'https://i.pinimg.com/564x/cc/f1/b3/ccf1b3231e59bfc1b74d41d2a5a3ae13.jpg',
      id: 13,
      idHeroe: 3,
      Nombre: 'Daredevil',
    },
    {
      url: 'https://www.g-mart.com/static/f178265.jpg',
      id: 133,
      idHeroe: 3,
      Nombre: 'Daredevil',
    },

    {
      url: 'https://i.ebayimg.com/images/g/SoEAAOxy~dNTJ3lS/s-l1600.jpg',
      id: 16,
      idHeroe: 6,
      Nombre: 'Spider-Man',
    },

    {
      url: 'https://hips.hearstapps.com/hmg-prod/images/aquaman-75-anos-1557827245.jpg',
      id: 11,
      idHeroe: 1,
      Nombre: 'Aquaman',
    },
    {
      url: 'https://static.wikia.nocookie.net/marvel_dc/images/a/a2/Batman_Vol_3_124_Textless.jpg/revision/latest/scale-to-width-down/1200?cb=20220608034122',
      id: 12,
      idHeroe: 2,
      Nombre: 'Batman',
    },

    {
      url: 'https://cdn.marvel.com/u/prod/marvel/i/mg/d/30/645110735447c/detail.jpg',
      id: 14,
      idHeroe: 4,
      Nombre: 'Hulk',
    },
  ];

  private galleryheroes2: galleryheroes[] = [];

  constructor(private dataBD: HeroesBDService) {}

  getGalleryHeroes(): any//galleryheroes[]
  {
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
  async getGalleryHeroe(idx: number) {
    let infoHeroesBD: any;
    let galleryArr: (string | number | null)[] = [];

    await this.dataBD
      .getHeroe(idx)
      .toPromise()
      .then((resp: any) => {
        //this.heroes = resp.data;
        //la linea anterior cambiarla asi:
        //ya que los Datos vienen en la resp
        infoHeroesBD = resp.resp;
        console.log("LLegamos aqui")
        console.log('Datos nuevos2 ', infoHeroesBD);
      });

    let NombreHeroe = '';
    for (let i = 0; i < infoHeroesBD.length; i++) {
      let heroe = infoHeroesBD[i];

      console.log("heroe1",heroe);

      let id = heroe.IdHeroe._id;
      console.log("id",id);
      console.log("idx",idx);
      if (idx == id) {
        console.log('entre');
        console.log("heroe2",heroe);
        NombreHeroe = heroe.Nombre;
        galleryArr.push(heroe);
      }
    }
    //console.log(galleryArr)
    return galleryArr;
  }





  getGalleryHeroeX(idx: number): galleryheroes[] {
    console.log(idx);
    let galleryArr: galleryheroes[] = [];
    let NombreHeroe = '';
    for (let i = 0; i < this.galleryheroes.length; i++) {
      let heroe = this.galleryheroes[i];

      console.log(heroe);

      let id = heroe.idHeroe;
      console.log(id);
      console.log(idx);
      if (idx == id) {
        console.log('entre');
        console.log(heroe);
        NombreHeroe = heroe.Nombre;
        galleryArr.push(heroe);
      }
    }

    return galleryArr;
  }
}
