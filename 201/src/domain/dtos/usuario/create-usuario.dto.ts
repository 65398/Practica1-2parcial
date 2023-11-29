import { CreateCompraDto } from "../compra/create-compra.dto";

export class CreateUsuarioDto {
    private constructor(
      public readonly nombre: string,
      public readonly email: string,
      public readonly compras?: CreateCompraDto[],
    ){}
  
    static create( props: {[key:string]: any} ): [string?, CreateUsuarioDto?]  {
      const { nombre, email, compra } = props;
      if ( !nombre ) return ['Nombre property is required', undefined];
      if ( !email ) return ['email property is required', undefined];
      return [undefined, new CreateUsuarioDto(nombre, email, compra)];
    }
  }