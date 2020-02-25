import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';
import {
    debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

import { Drink } from '../drink'
import { GlassService } from '../glass.service';

@Component({
    selector: 'app-ingredient-search',
    templateUrl: './ingredient-search.component.html',
    styleUrls: ['./ingredient-search.component.css']
})
export class IngredientSearchComponent implements OnInit {

    drinks$: Observable<Drink[]>
    private searchTerms = new Subject<string>()

    constructor(private glassService: GlassService) { }

    search(term: string): void {
        this.searchTerms.next(term)
    }

    ngOnInit(): void {
        this.drinks$ = this.searchTerms.pipe(
            debounceTime(300),
            distinctUntilChanged(),
            switchMap((term: string) => this.glassService.searchIngredients(term)),
        )
    }

}
