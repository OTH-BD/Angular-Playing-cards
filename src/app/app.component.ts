import { Component } from '@angular/core';

import { PlayingCardComponent } from './components/playing-card/playing-card.component';
import { Monster } from './models/monster.model';

@Component({
  selector: 'app-root',
  imports: [PlayingCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 monster1!: Monster;

 constructor(){
  this.monster1 = new Monster();
  this.monster1.name = "Pik";
  this.monster1.hp = 100;
  this.monster1.figureCaption= "N°00 Pik";
  this.monster1.attackName = "lbou3 bou3";
  this.monster1.attackDescription ="cherg a zebi cherg";
 }
}
