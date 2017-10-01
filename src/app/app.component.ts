import { Component } from '@angular/core';
import { JokeService } from './joke/joke.service';

@Component({
  selector: 'app-root',
  template: `
    <div>{{binding}}</div>
    <div class="text">text!</div>
    <learn-graphics class="graphics">
      shdfpishdpfsdif
    </learn-graphics>
  `,
  styles: [`
    .text { 
      z-index: 2; 
      color: white; 
      position: absolute; 
      margin-top: 100px;
      margin-left: 30px;
      font-size: 72px;
    }
    .text:hover {
      color: red;
    }
    .graphics { z-index: 1 }
  `]
})
export class AppComponent {

  n = [1,2,3,4];
  binding;

  constructor() { }

}
