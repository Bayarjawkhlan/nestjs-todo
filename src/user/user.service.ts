import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateUserDto } from './dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}
  async getUsers() {
    const users = await this.prisma.user.findMany({});

    const formattedUsers = users.map((user) => {
      delete user.password;
      return user;
    });

    return formattedUsers;
  }

  async getUserById(id: string) {
    const userExisting = await this.prisma.user.findFirst({
      where: {
        id,
      },
    });

    if (!userExisting) {
      throw new NotFoundException();
    }

    delete userExisting.password;

    return userExisting;
  }

  async updateUser(id: string, updateDto: UpdateUserDto) {
    const userExisting = await this.prisma.user.findFirst({
      where: {
        id,
      },
    });

    if (!userExisting) {
      throw new NotFoundException();
    }

    const user = await this.prisma.user.update({
      where: {
        id,
      },

      data: updateDto,
    });

    delete user.password;

    return user;
  }

  async deleteUser(id: string) {
    const userExisting = await this.prisma.user.findFirst({
      where: {
        id,
      },
    });

    if (!userExisting) {
      throw new NotFoundException();
    }

    const user = await this.prisma.user.delete({
      where: {
        id,
      },
    });

    delete user.password;

    return user;
  }
}
