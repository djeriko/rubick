import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put, Redirect, Header } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  @Get()
  @Redirect('https://google.com', 301)
  getAll() {
    return 'getAll'
  }

  @Get(':id')
  getOne(@Param('id') id: string): string{
    return 'getOne ' + id
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @Header('Cache-Contorl', 'none')
  create(@Body()  createUserDto: CreateUserDto): string {
    return 'create ' + createUserDto.name + ' has '  + createUserDto.mmr
  }
  
  @Delete(':id')
  remove(@Param('id') id: string){
    return 'remove ' + id
  }

  @Put(':id')
  update(@Body() updateUserDto: UpdateUserDto, @Param('id') id: string): string{
    return 'update ' + id
  }
}
