import { CreateUsuarioDto, UpdateUsuarioDto } from '../dtos';
import { UsuarioEntity } from '../entities/usuario.entity';



export abstract class UsuarioRepository {

  abstract create( createUsuarioDto: CreateUsuarioDto ): Promise<UsuarioEntity>;

  abstract getAll(): Promise<UsuarioEntity[]>;

  abstract findById( id: number ): Promise<UsuarioEntity>;
  abstract updateById( updateTodoDto: UpdateUsuarioDto ): Promise<UsuarioEntity>;
  abstract deleteById( id: number ): Promise<UsuarioEntity>;

}