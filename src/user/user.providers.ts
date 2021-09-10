import { Provider } from "@nestjs/common";
import { CreateUserService } from "./application/services/create-user.service";
import { UserRepository } from "./infraestructure/repository/user.repository";
import { USER_TYPES } from "./user.constants";

export const UserProviders: Provider[] = [
  {
    provide: USER_TYPES.BaseCreateUser,
    useClass: CreateUserService
  },
  {
    provide: USER_TYPES.IUserRepository,
    useClass: UserRepository
  }
]