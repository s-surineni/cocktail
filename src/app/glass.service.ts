import { Observable, of, throwError } from 'rxjs';
// import {
//     debounceTime, distinctUntilChanged, switchMap, map
// } from 'rxjs/operators';
// import 'rxjs/add/operator/map'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Drink } from './drink'
import { Glass } from './glass'
import { error } from '@angular/compiler/src/util';

@Injectable({
    providedIn: 'root'
})
export class GlassService {

    private glassesUrl = 'https://the-cocktail-db.p.rapidapi.com/list.php?g=list'
    private searchIngredientUrl = 'https://the-cocktail-db.p.rapidapi.com/filter.php'
    constructor(private http: HttpClient) { }

    getGlasses(): Observable<Glass[]> {
        return this.http.get<Glass[]>(this.glassesUrl, {
            headers: { 'X-RapidAPI-Key': '737c5e5e03msh08a9e6b86d136e3p12a5bcjsn8582e787b9ff' }
        }).pipe(map(
            (data) => {
                return data.drinks
            }))
    }

    searchIngredients(term: String): Observable<Drink[]> {
        if (!term.trim()) {
            return of([])
        }

        return this.http.get<Drink[]>(`${this.searchIngredientUrl}/?i=${term}`,
            {
                headers: { 'X-RapidAPI-Key': '737c5e5e03msh08a9e6b86d136e3p12a5bcjsn8582e787b9ff' }
            }).pipe(map(
                (data) => {
                    return data.drinks
                }))
    }
}
