import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { HEROES }  from '../../mockHeroes';
import { Hero } from '../../Hero'
import { MessageService } from '../messages/message.service';

@Injectable()
export class HeroService {

  constructor(private messageService:MessageService) { }

  getHeroes():Observable<Hero[]>{
    this.messageService.add('Heroe Service: fetched heroes');
    return of(HEROES);
  }
}