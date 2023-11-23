import { Request, Response } from 'express';
import { CreateCompraDto, UpdateCompraDto } from '../../domain/dtos';
import { CreateCompra, DeleteCompra, GetCompra, GetCompras, CompraRepository,  } from '../../domain';

export class ComprasController {

  //* DI
  constructor(
    private readonly compraRepository: CompraRepository,
  ) { }

  public getCompras = (req: Request, res: Response) => {
    new GetCompras(this.compraRepository)
      .execute()
      .then(compras => res.json(compras))
      .catch(error => res.status(400).json({ error }));
  };

  public getCompraById = (req: Request, res: Response) => {
    const id = +req.params.id;

    new GetCompra(this.compraRepository)
      .execute(id)
      .then(compra => res.json(compra))
      .catch(error => res.status(400).json({ error }));
  };

  public createCompra = (req: Request, res: Response) => {
    const [error, createCompraDto] = CreateCompraDto.create(req.body);
    if (error) return res.status(400).json({ error });

    new CreateCompra(this.compraRepository)
      .execute(createCompraDto!)
      .then(compra => res.json(compra))
      .catch(error => res.status(400).json({ error }));
  };

  public updateCompra = (req: Request, res: Response) => {
    const id = +req.params.id;
    const [error, updateCompraDto] = UpdateCompraDto.create({ ...req.body, id });
    if (error) return res.status(400).json({ error });

  };

  public deleteCompra = (req: Request, res: Response) => {
    const id = +req.params.id;

    new DeleteCompra(this.compraRepository)
      .execute(id)
      .then(compra => res.json(compra))
      .catch(error => res.status(400).json({ error }));
  };
}
