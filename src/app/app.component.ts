import { Component } from '@angular/core';
import { JokeService } from './joke/joke.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`.gap { margin-bottom: 50px; }`]
})
export class AppComponent {

  constructor() { }

}
