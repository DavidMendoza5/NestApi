import { IsEmail, IsNotEmpty, IsString, Length, Matches, MinLength } from "class-validator";

export class CreateUserRequestDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(5)
  username: string;

  @IsNotEmpty()
  @Length(8,20)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message:
      'The password must include at least one uppercase, lowercase, number and special character'
  })
  password: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;
}