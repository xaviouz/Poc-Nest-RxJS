import { Get, Param, Controller } from '@nestjs/common';
import { CatsService } from './cats.service';
import { ICat } from './interfaces/ICat'
import { Observable } from 'rxjs';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  getCats(): Observable<Array<ICat>> {
    return this.catsService.getCats();
  }

  @Get(':id')
  getCat(@Param('id') id): Observable<ICat> {
    return this.catsService.getCat(id);
  }
}
