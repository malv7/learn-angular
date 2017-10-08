import { Component } from "@angular/core";

@Component({
    selector: 'learn-ngrx',
    template: `
        <ngrx-counter></ngrx-counter>
        <ngrx-advanced-counter></ngrx-advanced-counter>
    `,
    styles: [``]
})
export class LearnNgrxComponent {
    
    constructor() { }

    updateData(): void {
        // dispatch: Action
    }

}