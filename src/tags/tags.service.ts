import { Injectable } from '@nestjs/common';
import { Tags } from './tags.entity';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TagsService {
    constructor(private prismaService: PrismaService) {}

    findall()  {
        return this.prismaService.tag.findall()
    }
}
