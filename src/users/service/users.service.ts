import { Injectable } from '@nestjs/common';
import { prisma } from '../../../prisma/prisma.client';
import { CreateUserDto } from '../dto/create-user.dto';

@Injectable()
export class UsersService {
  async getAllUsers() {
    try {
      return await prisma.users.findMany();
    } catch (e) {
      console.log(e);
    }
  }

  async getUser(id: number) {
    try {
      return await prisma.users.findUnique({
        where: {
          id: id,
        },
      });
    } catch (e) {
      console.log(e);
    }
  }

  async createUser(createUserDto): Promise<CreateUserDto> {
    try {
      return await prisma.users.create({
        data: {
          email: createUserDto.email,
          login: createUserDto.login,
          full_name: createUserDto.full_name,
          password: createUserDto.password,
        },
      });
    } catch (e) {
      console.log(e);
    }
  }

  async updateUser(id, updateUserDto) {
    try {
      return await prisma.users.update({
        where: {
          id: id,
        },
        data: {
          ...updateUserDto,
        },
      });
    } catch (e) {
      console.log(e);
    }
  }
}
