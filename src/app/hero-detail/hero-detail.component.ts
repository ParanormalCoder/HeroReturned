import { Component, OnInit, Input } from '@angular/core';
import {Hero} from '../hero';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import {HeroService} from '../hero-service.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;
  @Input() isback: Boolean;

  constructor(
      private heroService: HeroService,
      private route: ActivatedRoute,
      private location: Location
      ) { 
      }

  ngOnInit() {
      this.route.queryParams
      .subscribe((params: Params) => {
         !!params['isback'] && (this.isback = !!(+params['isback']));
         console.log(params);
      });
      this.route.params
      .switchMap((params: Params) => this.heroService.getHero(+params['id']))
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
     this.location.back();
  }

  consoleInputs(): void {
    console.log(this);
  }

  hideDetails(){
    this.hero = null;
  }

}
