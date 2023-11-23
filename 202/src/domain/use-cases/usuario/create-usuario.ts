import { CreateUsuarioDto } from '../../dtos';
import { UsuarioEntity } from '../../entities/usuario.entity';
import { UsuarioRepository } from '../../repositories/usuario.repository';


export interface CreateUsuarioUseCase {
  execute( dto: CreateUsuarioDto ): Promise<UsuarioEntity>
}

// ctrl+ shift + l
export class CreateUsuario implements CreateUsuarioUseCase {
  
  constructor(
    private readonly repository: UsuarioRepository,
  ) {}
  
  execute( dto: CreateUsuarioDto ): Promise<UsuarioEntity> {
    return this.repository.create(dto);
  }

}

