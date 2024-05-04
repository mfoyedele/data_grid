import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IgxGridModule } from 'igniteui-angular';
import { AppRoutingModule } from './app-routing.module';

import { PagingComponent, SortingComponent, FilteringComponent, EditingComponent } from './home';

@NgModule({
    imports: [
        BrowserModule,
        IgxGridModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        PagingComponent,
        SortingComponent,
        FilteringComponent,
        EditingComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }