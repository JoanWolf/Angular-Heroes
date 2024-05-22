import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL_SERVICIOS_MONGODB } from '../config/url.services';
import { BehaviorSubject, map } from 'rxjs';
import { heroe } from '../interfaces/heroe.interface';

@Injectable({
  providedIn: 'root',
})
export class HeroesBDService {
  userToken: any;
  constructor(public http: HttpClient) {}

  private searchQuery = new BehaviorSubject<string>('');
  currentQuery = this.searchQuery.asObservable();

  public leerToken() {
    if (localStorage.getItem('token')) {
      this.userToken = localStorage.getItem('token');
    } else {
      this.userToken = '';
    }

    return this.userToken;
  }

  getHeroes(): //Observable<Heroe[]>
  any {
    var headers_object = new HttpHeaders().set('x-token', this.leerToken());

    //console.log(headers_object);

    //let url1 = URL_SERVICIOS_MONGODB + "/heroes";

    let url = `${URL_SERVICIOS_MONGODB}/heroes`;

    //console.log(url);

    return this.http.get(url).pipe(
      map((data) => {
        console.log(data);
        return data;
      })
    );
  }

  getHeroe(id:number,gallery?:boolean):any{
    var headers_object = new HttpHeaders().set('x-token', this.leerToken());

    //console.log(headers_object);

    //let url1 = URL_SERVICIOS_MONGODB + "/heroes";
    let url="";
    console.log("valor: "+gallery)
    if(gallery == true){
      url = `${URL_SERVICIOS_MONGODB}/multimedias/heroe/${id}`;
    }else{
      url = `${URL_SERVICIOS_MONGODB}/heroe/${id}`;
    }
    console.log("Seleccion  "+url)


    console.log(url);

    return this.http.get(url).pipe(
      map((data) => {
        console.log("Data Inicial",data);
        return data;
      })
    );
  }
  getHeroesMult():any{
    var headers_object = new HttpHeaders().set('x-token', this.leerToken());

    //console.log(headers_object);

    //let url1 = URL_SERVICIOS_MONGODB + "/heroes";

    let url = `${URL_SERVICIOS_MONGODB}/multimedias`;

    console.log(url);

    return this.http.get(url).pipe(
      map((data) => {
        console.log("Data Inicial",data);
        return data;
      })
    );
  }
  getGrupoMultimedias(): any {
    let url = `${URL_SERVICIOS_MONGODB}/grupomultimedias`;
    console.log(url);

    return this.http.get(url).pipe(
      map((data) => {
        console.log('DATOS grupo', data);
        return data;
      })
    );
  }

  getMult(id:number):any{
    var headers_object = new HttpHeaders().set('x-token', this.leerToken());

    //console.log(headers_object);

    //let url1 = URL_SERVICIOS_MONGODB + "/heroes";

     let url = `${URL_SERVICIOS_MONGODB}/multimedias/${id}`;

      console.log("Seleccion  "+url)


    console.log(url);

    return this.http.get(url).pipe(
      map((data) => {
        console.log("Data Inicial",data);
        return data;
      })
    );
  }

  crud_Heroes(unHeroe: heroe, unaAccion: string):any {
    //console.log(unExpediente);

    if (unaAccion === 'eliminar') {
      //let parametros2 = new HttpParams();

      let url = `${URL_SERVICIOS_MONGODB}/heroes/${unHeroe._id}`;//ruta de para eleiminar

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
      let url = URL_SERVICIOS_MONGODB+ '/heroes';//Ruta de creacion

      // Begin assigning parameters
      parametros2 = parametros2.append('nombre',unHeroe.nombre);
      parametros2 = parametros2.append('bio',unHeroe.bio);
      parametros2 = parametros2.append('img',unHeroe.img);
      parametros2 = parametros2.append('aparicion',unHeroe.aparicion);
      parametros2 = parametros2.append('casa',unHeroe.casa);

      const body = {
        nombre:unHeroe.nombre,
        bio:unHeroe.bio,
        img:unHeroe.img,
        aparicion:unHeroe.aparicion,
        casa:unHeroe.casa,
      };

      return this.http.post(url, body).pipe(map((data) => data));
    }

    if (unaAccion === 'modificar') {
      let parametros = new HttpParams();

      let url = `${URL_SERVICIOS_MONGODB}/heroes/${unHeroe._id}`;

      //let url = URL_SERVICIOS_MONGODB + '/heroes';

      // Begin assigning parameters
      parametros = parametros.append('nombre',unHeroe.nombre);
      parametros = parametros.append('bio',unHeroe.bio);
      parametros = parametros.append('img',unHeroe.img);
      parametros = parametros.append('aparicion',unHeroe.aparicion);
      parametros = parametros.append('casa',unHeroe.casa);

      const body = {
        nombre:unHeroe.nombre,
        bio:unHeroe.bio,
        img:unHeroe.img,
        aparicion:unHeroe.aparicion,
        casa:unHeroe.casa,
      };

      //console.log(parametros);
      return this.http.put(url, body).pipe(map((data) => data));
    }
  }

  buscarHeroes(termino: string): any {
    let url = `${URL_SERVICIOS_MONGODB}/buscar/heroes/${termino}`;


    return this.http.get(url, {}).pipe(
      map((data) => {
        console.log(data);
        return data;
      })
    );
  }

  updateSearchQuery(query: string) {
    this.searchQuery.next(query);
  }


}
