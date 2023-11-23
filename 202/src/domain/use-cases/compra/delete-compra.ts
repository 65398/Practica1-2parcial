import { CompraEntity } from '../../entities/compra.entity';
import { CompraRepository } from '../../repositories/compra.repository';


export interface DeleteCompraUseCase {
  execute( id: number ): Promise<CompraEntity>
}

export class DeleteCompra implements DeleteCompraUseCase {
  
  constructor(
    private readonly repository: CompraRepository,
  ) {}
  
  execute( id: number ): Promise<CompraEntity> {
    return this.repository.deleteById(id);
  }

}

