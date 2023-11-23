import { CreateCompraDto, UpdateCompraDto } from '../dtos';
import { CompraEntity } from '../entities/compra.entity';



export abstract class CompraDatasource {

  abstract create( createCompraDto: CreateCompraDto ): Promise<CompraEntity>;

  abstract getAll(): Promise<CompraEntity[]>;

  abstract findById( id: number ): Promise<CompraEntity>;
  abstract updateById( updateCompraDto: UpdateCompraDto ): Promise<CompraEntity>;
  abstract deleteById( id: number ): Promise<CompraEntity>;

}