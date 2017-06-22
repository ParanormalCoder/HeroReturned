import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero-service.service';
import {Hero} from '../hero';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private heroService: HeroService) { }

  heroes : Hero[];
  selectedHero: Hero;
  
  ngOnInit() {
      this.heroService.getHeroesAsync().then(heroes => this.heroes = heroes.slice(1, 5));
  }

  onSelect(hero) {
    this.selectedHero = hero;
  }

}
