import { prisma } from '../../data/postgres';
import { CreateCompraDto, CompraDatasource, CompraEntity, UpdateCompraDto } from '../../domain';

export class CompraDatasourceImpl implements CompraDatasource {

  async create(createCompraDto: CreateCompraDto): Promise<CompraEntity> {
    const compra = await prisma.compra.create({
      data: createCompraDto!
    });

    return CompraEntity.fromObject(compra);
  }

  async getAll(): Promise<CompraEntity[]> {
    const compras = await prisma.compra.findMany();
    return compras.map(compra => CompraEntity.fromObject(compra));
  }

  async findById(id: number): Promise<CompraEntity> {
    const compra = await prisma.compra.findFirst({
      where: { id }
    });

    if (!compra) throw `Compra with id ${id} not found`;
    return CompraEntity.fromObject(compra);
  }

  async updateById(updateCompraDto: UpdateCompraDto): Promise<CompraEntity> {
    await this.findById(updateCompraDto.id);

    const updatedCompra = await prisma.compra.update({
      where: { id: updateCompraDto.id },
      data: updateCompraDto!.values
    });

    return CompraEntity.fromObject(updatedCompra);
  }

  async deleteById(id: number): Promise<CompraEntity> {
    await this.findById(id);
    const deleted = await prisma.compra.delete({
      where: { id }
    });

    return CompraEntity.fromObject(deleted);
  }

}
