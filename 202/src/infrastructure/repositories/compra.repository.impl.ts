import { CreateCompraDto, CompraDatasource, CompraEntity, CompraRepository, UpdateCompraDto } from '../../domain';

export class CompraRepositoryImpl implements CompraRepository {

  constructor(
    private readonly datasource: CompraDatasource,
  ) { }

  create(createCompraDto: CreateCompraDto): Promise<CompraEntity> {
    return this.datasource.create(createCompraDto);
  }

  getAll(): Promise<CompraEntity[]> {
    return this.datasource.getAll();
  }

  findById(id: number): Promise<CompraEntity> {
    return this.datasource.findById(id);
  }

  updateById(updateCompraDto: UpdateCompraDto): Promise<CompraEntity> {
    return this.datasource.updateById(updateCompraDto);
  }

  deleteById(id: number): Promise<CompraEntity> {
    return this.datasource.deleteById(id);
  }

}
