import { Get } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { TagsService } from './tags.service';

import { Tags } from './tags.entity';

@Controller('tags')
export class TagsController {
    constructor(private tagsService: TagsService) {}

    @Get()
    getTags(): Tags {
        return this.tagsService.findall()
    }
}
