import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type DishDocument = Dish & Document;

@Schema()
export class Dish {
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
}
export const DishShema = SchemaFactory.createForClass(Dish);
