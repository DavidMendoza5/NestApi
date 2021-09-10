import { CreateUserRequestDto } from "src/user/dto/create.request.dto";
import { CreateUserResponseDto } from "src/user/dto/create.response.dto.";

export interface IBaseCreateUser {
  createUser(userDto: CreateUserRequestDto): Promise<CreateUserResponseDto>;
}