import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma.service';

@Injectable()
export class PostService {
  constructor(readonly prismaService: PrismaService) {}

  createPost(data: any): any {
    return this.prismaService.post.create({
      data: {
        title: data.title,
        content: data.content,
        authorId: Number(data.authorId),
      },
    });
  }
  getAllPost(): any {
    return this.prismaService.post.findMany();
  }
  singlePersonAllPost(id: number): any {
    return this.prismaService.post.findMany({
      where: {
        authorId: Number(id),
      },
    });
  }
  getOnePost(authorId: number, postId: number): any {
    return this.prismaService.post.findUnique({
      where: {
        id: Number(postId),
        authorId: Number(authorId),
      },
    });
  }

  deleteOnePost(authorId: number, postId: number): any {
    return this.prismaService.post.delete({
      where: {
        id: Number(postId),
        authorId: Number(authorId),
      },
    });
  }

  updateOnePost(data: any): any {
    return this.prismaService.post.update({
      where: {
        id: Number(data.postId),
        authorId: Number(data.authorId),
      },
      data: {
        title: data.title,
        content: data.content,
        authorId: Number(data.authorId),
      },
    });
  }
}
