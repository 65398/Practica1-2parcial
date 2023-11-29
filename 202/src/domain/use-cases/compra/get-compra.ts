import { CompraEntity } from '../../entities/compra.entity';
import { CompraRepository } from '../../repositories/compra.repository';


export interface GetCompraUseCase {
  execute( id: number ): Promise<CompraEntity>
}


export class GetCompra implements GetCompraUseCase {
  
  constructor(
    private readonly repository: CompraRepository,
  ) {}
  
  execute( id: number ): Promise<CompraEntity> {
    return this.repository.findById(id);
  }

}

