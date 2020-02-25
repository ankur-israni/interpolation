import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Interpolation</h1>
    <h3>Player Name:{{player}}</h3>
    <h3>He is famous in: {{sport}}</h3><br>
    <h3>India capital is: {{capital}}</h3><br>
    <h3>My favorite sport is: {{mySport}}</h3>
    <p>List of Other Sports:</p>
    <ul>
      <li *ngFor="let sport of sports; let i = index">
        {{sport}}
      </li>

    </ul>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  player: string;
  sport: string;
  capital: string;
  sports = ['Gullidanda', 'Badminton', 'Ping Pong', 'Snooker'];
  mySport = this.sports[1];

  constructor() {
    this.capital = 'New Delhi';
    this.player = 'M.S. Dhoni';
    this.sport = 'Cricket';
  }
}
