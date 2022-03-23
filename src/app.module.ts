import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import * as path from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';
import { AppController } from './app.controller';
import { DishModule } from './dish/dish.module';
import { ConfigModule } from '@nestjs/config';
import { FileModule } from './file/file.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { OrderModule } from './order/oder.module';
@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env' }),
    ServeStaticModule.forRoot({ rootPath: path.resolve(__dirname, 'static') }),
    MongooseModule.forRoot(
      'mongodb+srv://trolik:trolik@cluster0.rr4lv.mongodb.net/vinylrecord?retryWrites=true&w=majority',
    ),
    UserModule,
    AuthModule,
    FileModule,
    DishModule,
    OrderModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
