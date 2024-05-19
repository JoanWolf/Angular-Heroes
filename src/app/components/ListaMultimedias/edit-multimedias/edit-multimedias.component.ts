import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { multimedia } from 'src/app/interfaces/multimedia.interface';
import { HeroesBDService } from 'src/app/services/heroes-bd.service';
import { MultheroeService } from 'src/app/services/multheroe.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-multimedias',
  templateUrl: './edit-multimedias.component.html',
  styleUrls: ['./edit-multimedias.component.css'],
})
export class EditMultimediasComponent {
  idHeroe!: any;

  unHeroe: multimedia = {
    url: '',
    tipo: '',
    estado: '',
    IdGrupoMultimedia: '',
    usuario: '',
    fecha_creacion: '',
    fecha_actualizacion: ''
  };

  unResultado!: any;
  unaAccion: string = 'Mensaje';
  unMensaje: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private dataBD: HeroesBDService,
    private dataMUlt: MultheroeService,
  ) {
    this.activatedRoute.params.subscribe((params) => {
      this.idHeroe = params['idHeroe'];
      console.log('IDHEROE', this.idHeroe);

      if (this.idHeroe != 'nuevo') {
        console.log("Entre a el proceso 1");
        this.cargarHeroeBD();
      }
      console.log(this.unHeroe);
    });
  }

  async cargarHeroeBD() {
    //this.cargando = true;
    console.log("Entre a el proceso 2");
    await this.dataBD
      .getMult(this.idHeroe)
      .toPromise()
      .then((data: any) => {
        this.unHeroe = data.resp;
      });
      console.log('Este es la mult '+this.unHeroe);
  }

  guardar() {
    console.log('Se envio Guardar');
    if (this.idHeroe == 'nuevo') {
      console.log('entre a nuevo');
      this.nuevoMult();
    } else {
      this.actualizarMult();
    }
  }

  actualizarMult() {
    //console.log(this.unaDivision);
    this.dataMUlt.crud_Multimedia(this.unHeroe, 'modificar').subscribe(
      (res: any) => {
        this.unResultado = res;

        console.log('RESULTADO_ACTUALIZAR', this.unResultado);

        if (this.unResultado.Ok == true) {
          this.unaAccion = 'Mensaje:';
          this.unMensaje = this.unResultado.msg;
          setTimeout(() => (this.unMensaje = ''), 3000);

          Swal.fire({
            icon: 'info',
            title: 'Information',
            text: this.unResultado.msg,
          });

          this.router.navigate(['/listamultimedias']);
        } else {
          this.unaAccion = 'Error:';
          this.unMensaje = this.unResultado.error.msg;
          setTimeout(() => (this.unMensaje = ''), 3000);
        }
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  async nuevoMult() {
    console.log('entre al metodo');
    await this.dataMUlt.crud_Multimedia(this.unHeroe, 'insertar').subscribe(
      (res: any) => {
        this.unResultado = res;

        console.log('RESULTADO_NUEVO', this.unResultado);

        if (this.unResultado.Ok == true) {
          this.unaAccion = 'Mensaje:';
          this.unMensaje = this.unResultado.msg;
          setTimeout(() => (this.unMensaje = ''), 3000);

          Swal.fire({
            icon: 'info',
            title: 'Information',
            text: this.unResultado.msg,
          });

          this.router.navigate(['/listamultimedias']);
        } else {
          this.unaAccion = 'Error:';
          this.unMensaje = this.unResultado.msg;
          setTimeout(() => (this.unMensaje = ''), 3000);
        }
      },
      (error: any) => {
        console.error(error);
      }
    );
  }
}
