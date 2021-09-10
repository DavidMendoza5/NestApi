import { Inject, Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { User } from 'src/user/domain/model/user.model';
import { IUserRepository } from 'src/user/domain/ports/user.repository.interface';
import { CreateUserRequestDto } from 'src/user/dto/create.request.dto';
import { CreateUserResponseDto } from 'src/user/dto/create.response.dto.';
import { USER_TYPES } from 'src/user/user.constants';
import { IBaseCreateUser } from '../interfaces/base.create.user';

@Injectable()
export class CreateUserService implements IBaseCreateUser {
  constructor(@Inject(USER_TYPES.IUserRepository) private _userRepository: IUserRepository) {}
  
  async createUser(createUserDto: CreateUserRequestDto): Promise<CreateUserResponseDto> {
    const user = new User(
      createUserDto.username,
      createUserDto.password,
      createUserDto.email
    )

    const saved = await this._userRepository.save(user);
    const new_user = plainToClass(CreateUserResponseDto, saved);
    return new_user;
  }
}
