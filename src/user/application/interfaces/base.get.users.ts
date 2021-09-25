import { CreateUserResponseDto } from "src/user/dto/create.response.dto.";


export interface IBaseGetUser {
  getUsers(): Promise<CreateUserResponseDto[]>;
}