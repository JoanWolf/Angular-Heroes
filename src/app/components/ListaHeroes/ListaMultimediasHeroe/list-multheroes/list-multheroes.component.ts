import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { multHeroe } from 'src/app/interfaces/multHeroe.interface';
import { MultheroeService } from 'src/app/services/multheroe.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-multheroes',
  templateUrl: './list-multheroes.component.html',
  styleUrls: ['./list-multheroes.component.css'],
})
export class ListMultheroesComponent {
  multsHeroe: multHeroe[] = [];
  id!: number;
  Nombre?: string = '';
  unResultado!:any;
  unaAccion: string = 'Mensaje';
  unMensaje: string = '';
  constructor(
    private data: MultheroeService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    // this.gelleryHeroe = data.getMultHeroe();
    // console.log(this.gelleryHeroe);

    this.activatedRoute.params.subscribe((params) => {
      this.id = params['idHeroe'];

      console.log('DATA', this.id);
    });
  }

  async ngOnInit() {
    let mult: (string | number | null)[] = [];
    mult = await this.data.getMultHeroe(this.id);
    console.log("heroe "+mult)
    this.multsHeroe = mult
      .filter((item) => item !== null) // Filtrar los elementos que son diferentes de null
      .map((item) => (item as any)); // Acceder a la propiedad IdMultimedia.url de manera segura
    console.log("Despues "+this.multsHeroe)
  }


  editarMult(unIdHeroe:any){
    this.router.navigate(['/editmultheroe', unIdHeroe]);
  }
  NuevoMult(){
    this.router.navigate(['/editmultheroe', 'nuevo'], { state: { data: this.id } });
  }

  eliminarMult(unIdHeroe:any) {
    console.log("ID A BORRAR: "+unIdHeroe);
    this.data.crud_multimediasHeroes(unIdHeroe, 'eliminar').subscribe(
      (res: any) => {
        this.unResultado = res;

        //console.log(this.unResultado);
        if (this.unResultado.Ok == true) {

           Swal.fire({
            icon: 'info',
            title: 'Information',
            text: 'Relacion Eliminada',
          });

          this.unaAccion = 'Mensaje:';
          this.unMensaje = 'Heroe Eliminado';
          setTimeout(() => (this.unMensaje = ''), 3000);


          this.ngOnInit() ;

        } else {
          Swal.fire({
            icon: 'info',
            title: 'Information',
            text: this.unResultado.msg,
          });


          this.unaAccion = 'Error:';
          this.unMensaje = this.unResultado.msg;
          setTimeout(() => (this.unMensaje = ''), 3000);
        }
      }
      ,(error:any) => {
        console.error(error)
      }
    );
  }
}
