import { CompraEntity } from '../../entities/compra.entity';
import { CompraRepository } from '../../repositories/compra.repository';


export interface GetComprasUseCase {
  execute(): Promise<CompraEntity[]>
}


export class GetCompras implements GetComprasUseCase {
  
  constructor(
    private readonly repository: CompraRepository,
  ) {}
  
  execute(): Promise<CompraEntity[]> {
    return this.repository.getAll();
  }

}

