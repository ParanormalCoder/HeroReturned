import { Injectable } from '@angular/core';

import {Hero} from './hero';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {
  getHeroes(): Hero[] {
    return HEROES;
  }

  getHeroesAsync(): Promise<Hero[]> {
      return new Promise(resolve=> {
          console.log('called!');
          setTimeout(()=>resolve(HEROES), 2000)
      });
  }

  getHero(id: number): Promise<Hero> {
      return this.getHeroesAsync()
          .then(heroes => heroes.find(hero => hero.id === id));
  }
}