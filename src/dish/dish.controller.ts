import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { DishDto } from './dto/dish.dto';
import { DishService } from './dish.service';

@Controller('dish')
export class DishController {
  constructor(private dishService: DishService) { }


  @Get()
  getOne(@Query('id') id: string) {
    return this.dishService.getOne(id);
  }
  @Get('search')
  search(@Query('query') query: string) {
    return this.dishService.search(query);
  }

  @Get('getAll')
  getAll(@Query('count') count: number, @Query('offset') offset: number) {
    return this.dishService.getAll(count, offset);
  }

  @Post('create')
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'image', maxCount: 1 },
    ]),
  )
  create(@UploadedFiles() files, @Body() dto: DishDto) {
    const { image } = files;
    return this.dishService.create(dto, image[0]);
  }
  @Get('delete')
  delete(@Query('id') id: number) {
    this.dishService.delete(id);
  }
}
