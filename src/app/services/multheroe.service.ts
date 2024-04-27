import { Injectable } from '@angular/core';
import { multHeroe } from '../interfaces/multHeroe.interface';
import { HeroesBDService } from './heroes-bd.service';

@Injectable({
  providedIn: 'root'
})
export class MultheroeService {

  private multheroe: multHeroe[] = [];

  constructor(private dataBD: HeroesBDService) {}

  async getMultHeroe(idx: number) {
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
}
