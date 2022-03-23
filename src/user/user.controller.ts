import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { UserDto } from './dto/user.dto';
import { User } from './schemas/user.schema';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @ApiOperation({ summary: 'Создание пользователя' })
  @ApiResponse({ status: 200, type: User })
  @Post('addImage')
  @UseInterceptors(FileFieldsInterceptor([{ name: 'image', maxCount: 1 }]))
  addImage(@UploadedFiles() files, @Query('id') id: string) {
    const { image } = files;
    return this.userService.addImage(id, image[0]);
  }

  @Post('create')
  createUser(@Body() dto: UserDto) {
    return this.userService.create(dto);
  }

  @Post('addCompany')
  addTrack(@Query('id') id: string, @Query('companyId') companyId: string) {
    return this.userService.addCompany(id, companyId);
  }

  @Get()
  getAll(@Query('count') count: number, @Query('offset') offset: number) {
    return this.userService.getAll(count, offset);
  }
  @Get('query')
  search(@Query('query') query: string) {
    return this.userService.search(query);
  }
}
