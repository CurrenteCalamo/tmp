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
import { CompanyDto } from './dto/company.dto';
import { CompanyService } from './company.service';

@Controller('dish')
export class CompanyController {
  constructor(private companyService: CompanyService) { }


  @Get()
  getOne(@Query('id') id: string) {
    return this.companyService.getOne(id);
  }
  @Get('search')
  search(@Query('query') query: string) {
    return this.companyService.search(query);
  }

  @Get('getAll')
  getAll(@Query('count') count: number, @Query('offset') offset: number) {
    return this.companyService.getAll(count, offset);
  }

  @Post('addUser')
  addUser(@Query('id') id: string, @Query('userId') userId: string) {
    return this.companyService.addUser(id, userId);
  }

  @Post('addOrder')
  addOrder(@Query('id') id: string, @Query('orderId') orderId: string) {
    return this.companyService.addOrders(id, orderId);
  }



  @Post('create')
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'image', maxCount: 1 },
    ]),
  )
  create(@UploadedFiles() files, @Body() dto: CompanyDto) {
    const { image } = files;
    return this.companyService.create(dto, image[0]);
  }
  @Get('delete')
  delete(@Query('id') id: number) {
    this.companyService.delete(id);
  }
}
