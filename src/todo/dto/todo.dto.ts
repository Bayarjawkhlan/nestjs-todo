import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateTodoDto {
  @IsNotEmpty()
  @IsString()
  body: string;
}

enum TODOSTATUS {
  TODO,
  INPROGRESS,
  DONE,
}

export class UpdateTodoDto {
  @IsString()
  @IsOptional()
  body: string;

  @IsEnum(TODOSTATUS)
  @IsOptional()
  @IsString()
  status: 'TODO' | 'INPROGRESS' | 'DONE';
}
