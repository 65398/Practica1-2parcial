import { CreateCompraDto } from '../../dtos';
import { CompraEntity } from '../../entities/compra.entity';
import { CompraRepository } from '../../repositories/compra.repository';


export interface CreateCompraUseCase {
  execute( dto: CreateCompraDto ): Promise<CompraEntity>
}

// ctrl+ shift + l
export class CreateCompra implements CreateCompraUseCase {
  
  constructor(
    private readonly repository: CompraRepository,
  ) {}
  
  execute( dto: CreateCompraDto ): Promise<CompraEntity> {
    return this.repository.create(dto);
  }

}

