import { Component } from '@angular/core';
import { JokeService } from './joke/joke.service';

@Component({
  selector: 'app-root',
  template: `
    <div class="text" (click)="toggle()"><i class="fa fa-superpowers fa-2x" aria-hidden="true"></i></div>
    <div class="text" id="fps"></div>
    <learn-graphics class="graphics" *ngIf="graphics"></learn-graphics>
    <!-- <learn-ngrx></learn-ngrx> -->
    <slites *ngIf="!graphics"></slites>
    `,
  styles: [`
    .text { 
      z-index: 2; 
      color: white; 
      position: absolute; 
      margin-top: 100px;
      margin-left: 140px;
      font-size: 24px;
      font-family: 'Roboto', sans-serif;
    }
    .text:hover {
      color: #00fff8;
      cursor: pointer;
    }
    .graphics { z-index: 1 }
    #fps {
      margin-top: 170px;
    }
    .icon {
      margin-right: 10px;
    }
  `]
})
export class AppComponent {

  graphics = false;

  constructor() { }
  
  toggle(): void {
    console.log(this.graphics);
    this.graphics = !this.graphics;
    console.log(this.graphics);
  }
}
