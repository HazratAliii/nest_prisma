import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post('')
  createUser(@Body() body: any): any {
    return this.userService.createUser(body);
  }
  @Get('all')
  getAllUser(): any {
    return this.userService.getAllUser();
  }
  @Get(':id')
  getOneUser(@Param('id') id: number): any {
    return this.userService.getOneUser(id);
  }
  @Delete(':id')
  deleteOneuser(@Param('id') id: number) {
    return this.userService.deleteONeUser(id);
  }
  @Put(':id')
  updateOneUser(@Param('id') id: number, @Body() data): any {
    return this.userService.updateOneUser(id, data);
  }
}
