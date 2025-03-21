import { Injectable } from '@nestjs/common';
import { Tags } from './tags.entity';

@Injectable()
export class TagsService {
    findall(): Tags {
        return ["reactjs", "angularjs"]
    }
}
