import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
export type OrderDocument = Order & Document;
@Schema()
export class Order {
  @Prop()
  company: string;

  @Prop()
  dish: string[];

  @Prop()
  date: string;
}
export const OrderShema = SchemaFactory.createForClass(Order);
