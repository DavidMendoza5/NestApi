import { Body, Controller, Inject, Post } from '@nestjs/common';
import { UnitOfWork } from 'src/share/unit-of-work/unit-of-work.provider';
import { IBaseCreateUser } from 'src/user/application/interfaces/base.create.user';
import { CreateUserRequestDto } from 'src/user/dto/create.request.dto';
import { CreateUserResponseDto } from 'src/user/dto/create.response.dto.';
import { USER_TYPES } from 'src/user/user.constants';

@Controller('user')
export class UserController {
  constructor(@Inject(USER_TYPES.BaseCreateUser) private readonly _baseCreateUser: IBaseCreateUser,
    private uow: UnitOfWork
  ){}

  @Post()
  async createUser(@Body() userDto: CreateUserRequestDto): Promise<CreateUserResponseDto> {
    const saved = await this.uow.withTransaction(() => this._baseCreateUser.createUser(userDto));
    return saved;
  }
}
