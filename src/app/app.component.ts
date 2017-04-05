import { Component } from '@angular/core';

export class Chidiom {
  id: number;
  name: string;
}

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h2>{{chidiom.name}} details!</h2>
    <div><label>id: </label>{{chidiom.id}}</div>
    <div>
      <label>name: </label>
      <input [(ngModel)]="chidiom.name" placeholder="name">
    </div>
    `
})
export class AppComponent {
  title = 'Tour of Chidioms';
  hero: Chidiom = {
    id: 1,
    name: 'Windstorm'
  };
}
