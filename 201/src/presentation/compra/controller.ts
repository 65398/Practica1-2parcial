import { Request, Response } from 'express';
import { prisma } from '../../data/postgres';
import { CreateCompraDto, UpdateCompraDto } from '../../domain/dtos';
import { create } from 'domain';


export class ComprasController {
  //* DI
  constructor() { }
  public getCompras = async( req: Request, res: Response ) => {
    const compras = await prisma.compra.findMany();
    return res.json( compras );
  };
  public getCompraById = async( req: Request, res: Response ) => {
    const id = +req.params.id;
    if ( isNaN( id ) ) return res.status( 400 ).json( { error: 'ID argument is not a number' } );

    const compra = await prisma.compra.findFirst({
      where: { id }
    });
    
    ( compra )
      ? res.json( compra )
      : res.status( 404 ).json( { error: `Compra with id ${ id } not found` } );
  };
  public createCompra = async( req: Request, res: Response ) => {
    
    const [error, createCompraDto] = CreateCompraDto.create(req.body);
    if ( error ) return res.status(400).json({ error });

    const { ...rest } = createCompraDto!;
    const compra = await prisma.compra.create({
      data: rest
    });

    res.json( compra );

  };
  public updateCompra = async( req: Request, res: Response ) => {
    const id = +req.params.id;
    const [error, updateCompraDto] = UpdateCompraDto.create({...req.body, id});
    if ( error ) return res.status(400).json({ error });
    
    const compra = await prisma.compra.findFirst({
      where: { id }
    });

    if ( !compra ) return res.status( 404 ).json( { error: `Compra with id ${ id } not found` } );

    const updatedCompra = await prisma.compra.update({
      where: { id },
      data: updateCompraDto!.values
    });
  
    res.json( updatedCompra );

  }
  public deleteCompra = async(req:Request, res: Response) => {
    const id = +req.params.id;

    const compra = await prisma.compra.findFirst({
      where: { id }
    });

    if ( !compra ) return res.status(404).json({ error: `Compra with id ${ id } not found` });

    const deleted = await prisma.compra.delete({
      where: { id }
    });

    ( deleted ) 
      ? res.json( deleted )
      : res.status(400).json({ error: `Compra with id ${ id } not found` });
    

  }
}