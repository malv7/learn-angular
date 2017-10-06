import { Component } from '@angular/core';
import { JokeService } from './joke/joke.service';

@Component({
  selector: 'app-root',
  template: `
    <div class="text">WebGL!</div>
    <learn-graphics class="graphics"></learn-graphics>
  `,
  styles: [`
    .text { 
      z-index: 2; 
      color: white; 
      position: absolute; 
      margin-top: 100px;
      margin-left: 30px;
      font-size: 36px;
    }
    .text:hover {
      background: grey;
    }
    .graphics { z-index: 1 }
  `]
})
export class AppComponent {

  constructor() { }

}
