export class CreateCompraDto {
    private constructor(
      public readonly id: number,
      public readonly fechaCompra: Date,
      public readonly usuarioId: number,
      // public readonly transactions: any[],
      // public readonly transactions: createTransactionDto[],
    ){}
  
    static create( props: {[key:string]: any} ): [string?, CreateCompraDto?]  {
      const { id, fechaCompra, usuarioId } = props;
      if ( !id ) return ['Id property is required', undefined];
      if ( !fechaCompra ) return ['Fecha de compra property is required', undefined];
      if ( !usuarioId ) return ['Id usuario property is required', undefined];
      return [undefined, new CreateCompraDto(id, fechaCompra, usuarioId)];
    }
  }