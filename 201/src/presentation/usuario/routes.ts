import { Router } from 'express';
import { UsuariosController } from './controller';


export class UsuarioRoutes {


  static get routes(): Router {

    const router = Router();

    const UsuarioController = new UsuariosController();

    router.get('/', UsuarioController.getUsuarios );
    router.get('/:id', UsuarioController.getUsuarioById );
    
    router.post('/',  UsuarioController.createUsuario );
    router.put('/:id',  UsuarioController.updateUsuario );
    router.delete('/:id',  UsuarioController.deleteUsuario );


    return router;
  }


}

