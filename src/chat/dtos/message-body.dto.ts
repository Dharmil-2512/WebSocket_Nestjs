import { IsNotEmpty, IsString } from 'class-validator';

export class MessageBodyDto {
  @IsString()
  @IsNotEmpty()
  name: string;
}
