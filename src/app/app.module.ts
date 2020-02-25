import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GlassesComponent } from './glasses/glasses.component';
import { IngredientSearchComponent } from './ingredient-search/ingredient-search.component';

@NgModule({
    declarations: [
        AppComponent,
        GlassesComponent,
        IngredientSearchComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
