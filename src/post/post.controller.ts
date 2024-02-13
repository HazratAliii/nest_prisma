import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { PostService } from './post.service';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}
  @Post('')
  createPost(@Body() body: any) {
    return this.postService.createPost(body);
  }
  @Get('')
  getAllPost(): any {
    return this.postService.getAllPost();
  }
  @Get(':id')
  singlePersonAllPost(@Param('id') id: number) {
    return this.postService.singlePersonAllPost(id);
  }
  @Get(':authorId/:postId')
  getOnePost(
    @Param('authorId') authorId: number,
    @Param('postId') postId: number,
  ) {
    return this.postService.getOnePost(authorId, postId);
  }
  @Delete(':authorId/:postId')
  deleteOnePost(
    @Param('authorId') authorId: number,
    @Param('postId') postId: number,
  ) {
    return this.postService.deleteOnePost(authorId, postId);
  }
  @Put('update')
  updateOnePost(@Body() body: any) {
    return this.postService.updateOnePost(body);
  }
}
