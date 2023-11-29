import { Request, Response } from 'express';
import { CreateUsuarioDto, UpdateUsuarioDto } from '../../domain/dtos';
import { CreateUsuario, DeleteUsuario, GetUsuario, GetUsuarios, UsuarioRepository, UpdateUsuario } from '../../domain';

export class UsuariosController {

  //* DI
  constructor(
    private readonly usuarioRepository: UsuarioRepository,
  ) { }

  public getUsuarios = (req: Request, res: Response) => {

    new GetUsuarios(this.usuarioRepository)
      .execute()
      .then(usuarios => res.json(usuarios))
      .catch(error => res.status(400).json({ error }));

  };

  public getUsuarioById = (req: Request, res: Response) => {
    const id = +req.params.id;

    new GetUsuario(this.usuarioRepository)
      .execute(id)
      .then(usuario => res.json(usuario))
      .catch(error => res.status(400).json({ error }));

  };

  public createUsuario = (req: Request, res: Response) => {
    const [error, createUsuarioDto] = CreateUsuarioDto.create(req.body);
    if (error) return res.status(400).json({ error });

    new CreateUsuario(this.usuarioRepository)
      .execute(createUsuarioDto!)
      .then(usuario => res.json(usuario))
      .catch(error => res.status(400).json({ error }));

  };

  public updateUsuario = (req: Request, res: Response) => {
    const id = +req.params.id;
    const [error, updateUsuarioDto] = UpdateUsuarioDto.create({ ...req.body, id });
    if (error) return res.status(400).json({ error });

    new UpdateUsuario(this.usuarioRepository)
      .execute(updateUsuarioDto!)
      .then(usuario => res.json(usuario))
      .catch(error => res.status(400).json({ error }));

  };

  public deleteUsuario = (req: Request, res: Response) => {
    const id = +req.params.id;

    new DeleteUsuario(this.usuarioRepository)
      .execute(id)
      .then(usuario => res.json(usuario))
      .catch(error => res.status(400).json({ error }));

  };

}
