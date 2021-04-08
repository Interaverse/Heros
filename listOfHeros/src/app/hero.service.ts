import { Injectable } from '@angular/core';
import { Hero } from './app.component';
import { HEROES } from './mock.heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes() : Hero[] {
    return HEROES;
  }
}
