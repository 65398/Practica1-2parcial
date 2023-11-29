import { Request, Response } from 'express';
import { CreateCompraDto, UpdateCompraDto } from '../../domain/dtos';
import { CompraRepository } from '../../domain';

export class ComprasController {

  //* DI
  constructor(
    private readonly compraRepository: CompraRepository,
  ) { }

  public getCompras = async (req: Request, res: Response) => {
    const compras = await this.compraRepository.getAll();
    return res.json(compras);
  };

  public getCompraById = async (req: Request, res: Response) => {
    const id = +req.params.id;

    try {
      const compra = await this.compraRepository.findById(id);
      res.json(compra);

    } catch (error) {
      res.status(400).json({ error });
    }
  };

  public createCompra = async (req: Request, res: Response) => {
    const [error, createCompraDto] = CreateCompraDto.create(req.body);
    if (error) return res.status(400).json({ error });

    const compra = await this.compraRepository.create(createCompraDto!);
    res.json(compra);
  };

  public updateCompra = async (req: Request, res: Response) => {
    const id = +req.params.id;
    const [error, updateCompraDto] = UpdateCompraDto.create({ ...req.body, id });
    if (error) return res.status(400).json({ error });

    const updatedCompra = await this.compraRepository.updateById(updateCompraDto!);
    return res.json(updatedCompra);
  };

  public deleteCompra = async (req: Request, res: Response) => {
    const id = +req.params.id;
    const deletedCompra = await this.compraRepository.deleteById(id);
    res.json(deletedCompra);
  };
}
