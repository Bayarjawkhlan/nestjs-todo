import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Put,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { JwtGuard } from 'src/auth/guard';
import { User } from 'src/auth/decorator';
import { User as UserType } from '@prisma/client';
import { UpdateUserDto } from './dto';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @UseGuards(JwtGuard)
  @Get('current')
  getCurrentUser(@User() user: UserType) {
    return user;
  }

  @Get()
  getUsers() {
    return this.userService.getUsers();
  }

  @Get(':id')
  getUserById(@Param('id') id: string) {
    return this.userService.getUserById(id);
  }

  @UseGuards(JwtGuard)
  @Put(':id')
  updateUser(
    @User() user: UserType,
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    if (!user) {
      throw new UnauthorizedException();
    }

    return this.userService.updateUser(id, updateUserDto);
  }

  @UseGuards(JwtGuard)
  @Delete(':id')
  deleteUserById(@User() user: UserType, @Param('id') id: string) {
    if (!user) {
      throw new UnauthorizedException();
    }

    return this.userService.deleteUser(id);
  }
}
