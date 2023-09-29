import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { JwtGuard } from 'src/auth/guard';
import { User } from 'src/auth/decorator';
import { User as UserType } from '@prisma/client';
import { CreateTodoDto, UpdateTodoDto } from './dto';

@Controller('todos')
export class TodoController {
  constructor(private todoService: TodoService) {}

  @Get()
  getTodos() {
    return this.todoService.getTodos();
  }

  @UseGuards(JwtGuard)
  @Get('my')
  getUserTodos(@User() user: UserType) {
    if (!user) {
      throw new UnauthorizedException();
    }

    return this.todoService.getUserTodo(user.id);
  }

  @UseGuards(JwtGuard)
  @Post()
  createTodo(@User() user: UserType, @Body() dto: CreateTodoDto) {
    if (!user) {
      throw new UnauthorizedException();
    }

    return this.todoService.createTodo(user.id, dto);
  }

  @UseGuards(JwtGuard)
  @Put(':id')
  updateTodo(
    @Param('id') id: string,
    @User() user: UserType,
    @Body() dto: UpdateTodoDto,
  ) {
    if (!user) {
      throw new UnauthorizedException();
    }

    return this.todoService.updateTodo(id, dto);
  }

  @UseGuards(JwtGuard)
  @Delete(':id')
  deleteTodo(@Param('id') id: string, @User() user: UserType) {
    if (!user) {
      throw new UnauthorizedException();
    }

    return this.todoService.deleteTodo(id);
  }
}
