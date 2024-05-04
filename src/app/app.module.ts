import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { PagingComponent, SortingComponent, FilteringComponent, EditingComponent } from './home';

@NgModule({
    imports: [BrowserModule],
    declarations: [
        AppComponent,
        PagingComponent,
        SortingComponent,
        FilteringComponent,
        EditingComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }