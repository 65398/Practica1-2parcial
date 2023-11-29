import { Router } from 'express';

import { UsuarioRoutes,  } from './usuario/routes';
import { CompraRoutes,  } from './compra/routes';


export class AppRoutes {


  static get routes(): Router {

    const router = Router();

    router.use('/api/usuarios', UsuarioRoutes.routes );
    router.use('/api/compras', CompraRoutes.routes );
    
    return router;
  }


}

