import { Router } from 'express';
import { ComprasController } from './controller';
import { CompraDatasourceImpl } from '../../infrastructure/datasource/compra.datasource.impl';
import { CompraRepositoryImpl } from '../../infrastructure/repositories/compra.repository.impl';

export class CompraRoutes {

  static get routes(): Router {

    const router = Router();

    const datasource = new CompraDatasourceImpl();
    const compraRepository = new CompraRepositoryImpl(datasource);
    const compraController = new ComprasController(compraRepository);

    router.get('/', compraController.getCompras);
    router.get('/:id', compraController.getCompraById);

    router.post('/', compraController.createCompra);
    router.put('/:id', compraController.updateCompra);
    router.delete('/:id', compraController.deleteCompra);

    return router;
  }

}
