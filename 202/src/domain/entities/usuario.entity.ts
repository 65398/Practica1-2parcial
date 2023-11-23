import { CompraEntity } from "./compra.entity";


export class UsuarioEntity {

  constructor(
    public id: number,
    public nombre: string,
    public email: string,
    public compras?: CompraEntity[],
  ) {}

  get Compras() {
    return this.compras;
  }

  public static fromObject( object: {[key: string]: any} ): UsuarioEntity {
    const { id, nombre, email, compras } = object;
    if ( !id ) throw 'Id is required';
    if ( !nombre ) throw 'nombre is required';
    if ( !email ) throw 'email is required';

      return new UsuarioEntity(id, nombre, email, compras)
  }

}


