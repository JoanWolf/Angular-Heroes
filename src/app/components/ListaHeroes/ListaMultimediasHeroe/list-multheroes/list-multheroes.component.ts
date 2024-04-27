import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { multHeroe } from 'src/app/interfaces/multHeroe.interface';
import { MultheroeService } from 'src/app/services/multheroe.service';

@Component({
  selector: 'app-list-multheroes',
  templateUrl: './list-multheroes.component.html',
  styleUrls: ['./list-multheroes.component.css'],
})
export class ListMultheroesComponent {
  multsHeroe: multHeroe[] = [];
  id!: number;
  Nombre?: string = '';
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
}
