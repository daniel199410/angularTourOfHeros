import { Component, OnInit } from '@angular/core';
import { Hero } from '../Hero';
import { HEROES } from '../mockHeroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  selectedHero: Hero;
  hero:Hero = {
    id: 1,
    name: "Windstorm"
  }
  heroes = HEROES; 

  constructor() { }

  ngOnInit() {
  }

  onSelect(hero:Hero): void{
    this.selectedHero = hero;
  }
}