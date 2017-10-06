import { Slite, SLITES } from './slites';
import { Component } from '@angular/core';

@Component({
    selector: 'slites',
    template:
    `
        <div class="bg">
            <div class="last" (click)="last()">
                <div class="arrow"><</div>
            </div>
            <div class="overlay">
                <div>
                    <h1 class="topic">{{slite.topic}}</h1>
                    <p class="answer">{{slite.answer}}</p>
                    <p class="appendix">{{slite.appendix}}</p>
                </div>
            </div>
            <div class="next" (click)="next()">
                <div class="arrow">></div>
            </div>
        </div>
    `,

    styles:
    [`
        .bg {
            width: 100vw;
            height: 100vh;
            background: #151a36;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .overlay { 
            width: 60%;
            height: 300px;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
        }

        .topic {
            color: #ffcc00;
            font-size: 40px;
            width: 100%;
            margin-bottom: 40px;
            font-family: 'Roboto', sans-serif;
            text-align: center;
        }

        .appendix, .answer {
            color: white;
            font-size: 24px;
            width: 100%;
            font-family: 'Roboto', sans-serif;
            line-height: 34px;
        }

        .appendix { 
            color: #88ff82;
            // text-align: center;
        }

        .last, .next {
            width: 100px;
            height: 100px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-family: 'Roboto', sans-serif;
            color: white;
            cursor: pointer;
        }

        .arrow {
            font-family: 'Roboto', sans-serif;
            font-size: 40px;
        }
    `]
})
export class SlitesComponent {

    slite: Slite;
    
    constructor() {
        this.slite = SLITES[0];
    }

    next(): void {
        const i = SLITES.indexOf(this.slite) + 1;
        (SLITES[i])
            ? this.slite = SLITES[i]
            : this.slite = SLITES[0]; // repeat
    }

    last(): void {
        const i = SLITES.indexOf(this.slite) - 1;
        (SLITES[i])
            ? this.slite = SLITES[i] 
            : this.slite = SLITES[SLITES.length - 1]; // repeat
    }

}
