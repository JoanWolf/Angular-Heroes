export interface multimedia {
  _id?: number;
  url: string;
  tipo: string;
  estado: string;
  IdGrupoMultimedia: {
    _id?: number;
    nombre: string;
  };
  usuario: {
    _id?: number;
    nombre: string;
  };
  fecha_creacion: string;
}
