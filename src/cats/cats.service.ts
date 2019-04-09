import { Injectable } from '@nestjs/common';
import { ICat } from './interfaces/ICat'
import { cats } from './cats'
import { Observable, of } from 'rxjs';

@Injectable()
export class CatsService {
  getCats = (): Observable<Array<ICat>> => of(cats.map<ICat>(cat => cat))
  getCat = (id: string): Observable<ICat> => of(cats.find(cat => cat.id == id))
}
