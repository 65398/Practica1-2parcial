import { UpdateCompraDto } from "../compra/update-compra.dto";

export class UpdateUsuarioDto {
  private constructor(
    public readonly id: number,
    public readonly nombre?: string,
    public readonly email?: string,
    public readonly compras?: UpdateCompraDto[],
  ) {}

  get values() {
    const returnObj: { [key: string]: any } = {};

    if (this.nombre) returnObj.nombre = this.nombre;
    if (this.email) returnObj.email = this.email;
    if (this.compras) returnObj.compras = this.compras;

    return returnObj;
  }

  static create(props: { [key: string]: any }): [string?, UpdateUsuarioDto?] {
    const { id, nombre, email, compras } = props;
    let newName = nombre;

    if (!id || isNaN(Number(id))) {
      return ['id must be a valid number'];
    }

    if (!nombre && !email && !compras) {
      return ['At least one property must be provided'];
    }

    return [undefined, new UpdateUsuarioDto(id, nombre, email, compras)]; 
  }
}
