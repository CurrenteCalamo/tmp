import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Order, OrderDocument } from './schemas/order.schema';
import { Model } from 'mongoose';
import { OrderDto } from './dto/order.dto';
@Injectable()
export class OrderService {
  constructor(
    @InjectModel(Order.name) private orderModel: Model<OrderDocument>,
  ) { }

  async dispatch(id, dish) {
    const order = await this.orderModel.findById(id);
    order.dish.push(dish);
    order.save();
    return order;
  }



  async getOne(id) {
    const order = this.orderModel.findById(id);
    return order;
  }

  async getAll(id, date) {
    const orders = await this.orderModel.find({
      creator: id,
      date: date
    });
    return orders;
  }
  async create(dto: OrderDto) {
    const order = await this.orderModel.create(dto);
    return order;
  }

  async delete(id) {
    try {
      const track = await this.orderModel.findById(id);
      track.delete();
    } catch (e) {
      return null;
    }
  }
}
