import { IsEmail, IsString, IsStrongPassword, Min } from 'class-validator'

export class CreateUserDto {
  @IsString()
  @Min(3)
  readonly username: string

  @IsString()
  @IsStrongPassword()
  readonly password: string

  @IsString()
  @IsEmail()
  readonly email: string
}
