import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTodoDto, UpdateTodoDto } from './dto';

@Injectable()
export class TodoService {
  constructor(private prisma: PrismaService) {}

  async getTodos() {
    const todos = await this.prisma.todo.findMany({});

    return todos;
  }

  async getUserTodo(userId: string) {
    const todos = await this.prisma.todo.findMany({
      where: {
        userId,
      },
    });

    return todos;
  }

  async createTodo(userId: string, { body }: CreateTodoDto) {
    const todo = await this.prisma.todo.create({
      data: {
        body,
        userId,
      },
    });

    return todo;
  }

  async updateTodo(id: string, dto: UpdateTodoDto) {
    const todoExisting = await this.prisma.todo.findFirst({
      where: {
        id,
      },
    });

    if (!todoExisting) {
      throw new NotFoundException();
    }

    const todo = await this.prisma.todo.update({
      where: {
        id,
      },

      data: dto,
    });

    return todo;
  }

  async deleteTodo(id: string) {
    const todoExisting = await this.prisma.todo.findFirst({
      where: {
        id,
      },
    });

    if (!todoExisting) {
      throw new NotFoundException();
    }

    const todo = await this.prisma.todo.delete({
      where: {
        id,
      },
    });

    return todo;
  }
}
