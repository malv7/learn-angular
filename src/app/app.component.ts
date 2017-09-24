import { Component } from '@angular/core';
import { JokeService } from './joke.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  joke: string;
  showJoke: boolean = true;

  constructor(private jokeService: JokeService) { 
    this.jokeService.joke$.subscribe(joke => this.joke = joke);
  }

  getJoke() {
    this.jokeService.getJoke();
  }

  toggleShowJoke() {
    this.showJoke = !this.showJoke;
  }

}
