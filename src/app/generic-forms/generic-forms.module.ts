import { HighlightDirective } from './highlight.directive';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { GenericFormsComponent } from './generic-forms.component';
import { NgModule } from "@angular/core";
import { PromiseComponent } from './promise.component';

@NgModule({
    imports: [BrowserModule, FormsModule],
    exports: [GenericFormsComponent],
    declarations: [GenericFormsComponent, HighlightDirective, PromiseComponent],
    providers: []
})
export class GenericFormsModule { }