import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CompanyDocument = Company & Document;

@Schema()
export class Company {
  @Prop()
  name: string;

  @Prop()
  image: string;

  @Prop()
  text: string;

  @Prop()
  limit: string;

  @Prop()
  type: number;

  @Prop()
  orders: number[];

  @Prop()
  users: number[];

}
export const CompanyShema = SchemaFactory.createForClass(Company);
