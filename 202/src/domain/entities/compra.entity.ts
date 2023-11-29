export class CompraEntity {

    constructor(
      public id: number,
      public fechaCompra: Date,
      public usuarioId: string,
    ) {}
  
    public static fromObject( object: {[key: string]: any} ): CompraEntity {
      const { id, fechaCompra, usuarioId } = object;
      if ( !id ) throw 'Id is required';
      if ( !fechaCompra ) throw 'fecha de compra is required';
      if ( !usuarioId ) throw 'Usuario ID is required';
  
        return new CompraEntity(id, fechaCompra, usuarioId)
    }
  
  }