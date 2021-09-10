import { Exclude } from "class-transformer";


export class CreateUserResponseDto {
  id: string;

  username: string;

  @Exclude()  
  password: string;

  email: string;
}