import { Inject, Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { IUserRepository } from 'src/user/domain/ports/user.repository.interface';
import { CreateUserResponseDto } from 'src/user/dto/create.response.dto.';
import { USER_TYPES } from 'src/user/user.constants';
import { IBaseGetUser } from '../interfaces/base.get.users';

@Injectable()
export class GetUserService implements IBaseGetUser {
  constructor(@Inject(USER_TYPES.IUserRepository) private _userRepository: IUserRepository) {}
  
  async getUsers(): Promise<CreateUserResponseDto[]> {
    const users = await this._userRepository.get({});

    return plainToClass(CreateUserResponseDto, users);
  }
}
