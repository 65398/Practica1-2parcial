import { Router } from 'express';
import { ComprasController } from './controller';


export class CompraRoutes {


  static get routes(): Router {

    const router = Router();

    const CompraController = new ComprasController();

    router.get('/', CompraController.getCompras );
    router.get('/:id', CompraController.getCompraById );
    
    router.post('/', CompraController.createCompra );
    router.put('/:id', CompraController.updateCompra );
    router.delete('/:id', CompraController.deleteCompra );


    return router;
  }


}

