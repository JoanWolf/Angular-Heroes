import { Injectable } from '@angular/core';
import { multHeroe } from '../interfaces/multHeroe.interface';
import { HeroesBDService } from './heroes-bd.service';
import { multimedia } from '../interfaces/multimedia.interface';
import { URL_SERVICIOS_MONGODB } from '../config/url.services';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MultheroeService {
  private multheroe: multHeroe[] = [];

  constructor(private dataBD: HeroesBDService, public http: HttpClient) {}

  async getMultHeroe(idx: number) {
    let infoHeroesBD: any;
    let galleryArr: (string | number | null)[] = [];

    await this.dataBD
      .getHeroe(idx,true)
      .toPromise()
      .then((resp: any) => {
        //this.heroes = resp.data;
        //la linea anterior cambiarla asi:
        //ya que los Datos vienen en la resp
        infoHeroesBD = resp.resp;
        console.log('LLegamos aqui');
        console.log('Datos nuevos2 ', infoHeroesBD);
      });

    let NombreHeroe = '';
    for (let i = 0; i < infoHeroesBD.length; i++) {
      let heroe = infoHeroesBD[i];

      console.log('heroe1', heroe);

      let id = heroe.IdHeroe._id;
      console.log('id', id);
      console.log('idx', idx);
      if (idx == id) {
        console.log('entre');
        console.log('heroe2', heroe);
        NombreHeroe = heroe.Nombre;
        galleryArr.push(heroe);
      }
    }
    //console.log(galleryArr)
    return galleryArr;
  }

  async getMultHeroes() {
    let infoHeroesBD: any;
    let galleryArr: (string | number | null)[] = [];

    await this.dataBD
      .getHeroesMult()
      .toPromise()
      .then((resp: any) => {
        //this.heroes = resp.data;
        //la linea anterior cambiarla asi:
        //ya que los Datos vienen en la resp
        infoHeroesBD = resp.resp;
        console.log('LLegamos aqui');
        console.log('Datos nuevos2 ', infoHeroesBD);
      });

    let NombreHeroe = '';
    for (let i = 0; i < infoHeroesBD.length; i++) {
      let heroe = infoHeroesBD[i];

      console.log('heroe1', heroe);
      console.log('entre');
      console.log('heroe2', heroe);
      galleryArr.push(heroe);
    }
    //console.log(galleryArr)
    return galleryArr;
  }

  crud_Multimedia(unHeroe: multimedia, unaAccion: string): any {
    //console.log(unExpediente);

    if (unaAccion === 'eliminar') {
      //let parametros2 = new HttpParams();

      let url = `${URL_SERVICIOS_MONGODB}/multimedias/${unHeroe._id}`; //ruta de para eleiminar

      return this.http.delete(url).pipe(
        map((data) => {
          return data;
        })
      );
    }

    /*
    nombre: string;
    bio: string;
    img: string;
    aparicion: string;
    casa: string;
    _id?: string;
    */
    if (unaAccion === 'insertar') {
      let parametros2 = new HttpParams();
      let url = URL_SERVICIOS_MONGODB + '/multimedias'; //Ruta de creacion

      // Begin assigning parameters
      parametros2 = parametros2.append('url', unHeroe.url);

      unHeroe.tipo = 'image'
      unHeroe.estado = 'true'

      const body = {

        estado: unHeroe.estado,
        url: unHeroe.url,
        tipo: unHeroe.tipo,

      };

      return this.http.post(url, body).pipe(map((data) => data));
    }

    if (unaAccion === 'modificar') {
      let parametros = new HttpParams();

      let url = `${URL_SERVICIOS_MONGODB}/multimedias/${unHeroe._id}`;

      //let url = URL_SERVICIOS_MONGODB + '/heroes';

      // Begin assigning parameters
      parametros = parametros.append('url', unHeroe.url);
      unHeroe.tipo = 'image'
      unHeroe.estado = 'true'


      const body = {
        url: unHeroe.url,
      };

      //console.log(parametros);
      return this.http.put(url, body).pipe(map((data) => data));
    }
  }

  // crud_Multimedia_Heroe(unHeroe: multHeroe, unaAccion: string): any {

  //   //console.log(unExpediente);

  //   if (unaAccion === 'eliminar') {
  //     //let parametros2 = new HttpParams();

  //     let url = `${URL_SERVICIOS_MONGODB}/multimedias/heroe/${unHeroe._id}`; //ruta de para eleiminar

  //     return this.http.delete(url).pipe(
  //       map((data) => {
  //         return data;
  //       })
  //     );
  //   }

  //   /*
  //   nombre: string;
  //   bio: string;
  //   img: string;
  //   aparicion: string;
  //   casa: string;
  //   _id?: string;
  //   */
  //   if (unaAccion === 'insertar') {
  //     let parametros2 = new HttpParams();
  //     let url = URL_SERVICIOS_MONGODB + '/multimedias/heroe/'; //Ruta de creacion

  //     // Begin assigning parameters
  //     parametros2 = parametros2.append('url', unHeroe.url);

  //     unHeroe.tipo = 'image'
  //     unHeroe.estado = 'true'

  //     const body = {

  //       estado: unHeroe.estado,
  //       url: unHeroe.url,
  //       tipo: unHeroe.tipo,

  //     };

  //     return this.http.post(url, body).pipe(map((data) => data));
  //   }

  //   if (unaAccion === 'modificar') {
  //     let parametros = new HttpParams();

  //     let url = `${URL_SERVICIOS_MONGODB}/multimedias/${unHeroe._id}`;

  //     //let url = URL_SERVICIOS_MONGODB + '/heroes';

  //     // Begin assigning parameters
  //     parametros = parametros.append('url', unHeroe.url);
  //     unHeroe.tipo = 'image'
  //     unHeroe.estado = 'true'


  //     const body = {
  //       url: unHeroe.url,
  //     };

  //     //console.log(parametros);
  //     return this.http.put(url, body).pipe(map((data) => data));
  //   }
  // }
}
