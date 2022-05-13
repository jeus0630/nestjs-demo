import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto } from './CreateCatDto';
import { Cat } from './interface/cat.interface';

@Controller('cats')
export class CatsController {
  constructor(private catService: CatsService) {}

  @Get()
  findAll(): Cat[] {
    return this.catService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `This action returns a ${id}`;
  }

  @Post()
  create(@Body() createCatDto: CreateCatDto): Cat {
    return this.catService.create(createCatDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() createCatDto: CreateCatDto): string {
    return `This action updates a ${id} cat`;
  }

  @Delete(':id')
  remove(@Param('id') id: string): string {
    return `This action removes a ${id} cat`;
  }
}
