import { ApiProperty } from '@nestjs/swagger';

export class CreatePostDto {
  @ApiProperty()
  readonly userId: number;

  @ApiProperty()
  readonly title: string;

  @ApiProperty()
  readonly body: string;
}
