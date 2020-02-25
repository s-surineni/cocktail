import { Component, OnInit } from '@angular/core';

import { Glass } from '../glass'
import { GLASSES } from '../mock-glasses'

import { GlassService } from '../glass.service'

@Component({
    selector: 'app-glasses',
    templateUrl: './glasses.component.html',
    styleUrls: ['./glasses.component.css']
})
export class GlassesComponent implements OnInit {

    constructor(private glassService: GlassService) { }

    ngOnInit(): void {
        this.getGlasses()
    }

    glass: Glass = {
        strGlass: "Highball glass"
    }

    glasses: Glass[]

    getGlasses(): void {
        this.glassService.getGlasses()
            .subscribe(glasses => this.glasses = glasses)
        // .subscribe(glasses => this.glasses = null)

    }
}
