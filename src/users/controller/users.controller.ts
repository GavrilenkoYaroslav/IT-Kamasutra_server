import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { UsersService } from '../service/users.service';
// import {GetUserDto} from "../dto/get-user.dto";

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async getAllUsers(): Promise<Array<any>> {
    return await this.usersService.getAllUsers();
  }

  @Get(':id')
  async getUser(@Param('id') id: string): Promise<any> {
    return await this.usersService.getUser(Number(id));
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async createUser(@Body() createUserDto: CreateUserDto): Promise<any> {
    return await this.usersService.createUser(createUserDto);
  }

  @Put(':id')
  async updateUser(
    @Body() updateUserDto: UpdateUserDto,
    @Param('id') id: string,
  ): Promise<any> {
    return await this.usersService.updateUser(Number(id), updateUserDto);
  }
}
