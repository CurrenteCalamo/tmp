import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

export type UserDocument = User & Document;
@Schema()
export class User {
  @Prop()
  username: string;

  @Prop()
  email: string;

  @Prop()
  password: string;

  @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
  @Prop()
  company: string[];

  @Prop()
  role: string;

  @Prop()
  image: string;
}
export const UserShema = SchemaFactory.createForClass(User);
