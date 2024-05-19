import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { multimedia } from 'src/app/interfaces/multimedia.interface';
import { MultheroeService } from 'src/app/services/multheroe.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-multimedias',
  templateUrl: './list-multimedias.component.html',
  styleUrls: ['./list-multimedias.component.css'],
})
export class ListMultimediasComponent {
  multsHeroe: multimedia[] = [];
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
    this.cargarData();
  }

  async cargarData() {
    await this.cargarMultimediasV1();
  }

  async cargarMultimediasV1() {
    let mult: (string | number | null)[] = [];
    mult = await this.data.getMultHeroes();
    console.log('heroe ' + mult);
    this.multsHeroe = mult
      .filter((item) => item !== null) // Filtrar los elementos que son diferentes de null
      .map((item) => item as any); // Acceder a la propiedad IdMultimedia.url de manera segura
    console.log('Despues ' + this.multsHeroe);
  }

  editarMult(unIdHeroe:any){
    this.router.navigate(['/editMult', unIdHeroe]);
  }

  eliminarMult(unHeroe: any) {
    //console.log(this.unaDivision);
    this.data.crud_Multimedia(unHeroe, 'eliminar').subscribe(
      (res: any) => {
        this.unResultado = res;

        //console.log(this.unResultado);
        if (this.unResultado.Ok == true) {

           Swal.fire({
            icon: 'info',
            title: 'Information',
            text: 'Multimedia Eliminada',
          });

          this.unaAccion = 'Mensaje:';
          this.unMensaje = 'Heroe Eliminado';
          setTimeout(() => (this.unMensaje = ''), 3000);


          this.cargarData() ;

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
