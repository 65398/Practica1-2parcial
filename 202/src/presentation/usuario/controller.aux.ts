import { Request, Response } from 'express';
import { CreateUsuarioDto, UpdateUsuarioDto } from '../../domain/dtos';
import { UsuarioRepository } from '../../domain';

export class UsuarioController {

  //* DI
  constructor(
    private readonly usuarioRepository: UsuarioRepository,
  ) { }

  public getUsuarios = async (req: Request, res: Response) => {
    const usuarios = await this.usuarioRepository.getAll();
    return res.json(usuarios);
  };

  public getUsuarioById = async (req: Request, res: Response) => {
    const id = +req.params.id;

    try {
      const usuario = await this.usuarioRepository.findById(id);
      res.json(usuario);

    } catch (error) {
      res.status(400).json({ error });
    }

  };

  public createUsuario = async (req: Request, res: Response) => {
    const [error, createUsuarioDto] = CreateUsuarioDto.create(req.body);
    if (error) return res.status(400).json({ error });

    const usuario = await this.usuarioRepository.create(createUsuarioDto!);
    res.json(usuario);

  };

  public updateUsuario = async (req: Request, res: Response) => {
    const id = +req.params.id;
    const [error, updateUsuarioDto] = UpdateUsuarioDto.create({ ...req.body, id });
    if (error) return res.status(400).json({ error });

    const updatedUsuario = await this.usuarioRepository.updateById(updateUsuarioDto!);
    return res.json(updatedUsuario);

  };

  public deleteUsuario = async (req: Request, res: Response) => {
    const id = +req.params.id;
    const deletedUsuario = await this.usuarioRepository.deleteById(id);
    res.json(deletedUsuario);

  };
}
