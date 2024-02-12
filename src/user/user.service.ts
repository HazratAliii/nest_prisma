import { Injectable, Param } from '@nestjs/common';
import { PrismaService } from 'prisma.service';

@Injectable()
export class UserService {
  constructor(readonly prismaService: PrismaService) {}

  createUser(data: any): any {
    return this.prismaService.user.create({
      data: data,
    });
  }
  getAllUser(): any {
    return this.prismaService.user.findMany();
  }
  getOneUser(id: number): any {
    return this.prismaService.user.findUnique({
      where: {
        id: Number(id),
      },
    });
  }

  deleteONeUser(id: number): any {
    return this.prismaService.user.delete({
      where: {
        id: Number(id),
      },
    });
  }

  updateOneUser(id: number, data: any): any {
    return this.prismaService.user.update({
      where: {
        id: Number(id),
      },
      data: data,
    });
  }
}
