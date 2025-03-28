import { Get } from "@nestjs/common";
import { Controller } from '@nestjs/common';
import { TagsService } from "./tags.service";

@Controller('tags')
export class TagsController {
  constructor(private tagsService: TagsService) { }

  @Get()
  async getTags() {
    return {
      tags: await this.tagsService.findAll()
    }
  }

}
