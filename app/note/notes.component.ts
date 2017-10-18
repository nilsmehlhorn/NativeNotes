import { Component } from "@angular/core";

import { Note } from "./note.model";

@Component({
    moduleId: module.id,
    selector: "nn-notes",
    templateUrl: "notes.component.xml",
    styleUrls: ["notes.component.css"]
})

export class NotesComponent {

    public notes:Array<Note> = [];

    constructor() {
        this.notes.push(
            new Note("Themen für Meeting", "Im Meeting am Montag auf jeden Fall die festgelegten Themen ansprechen!"),
            new Note("Urlaubsziele", "Entpannen am Strand, in die Berge oder doch lieber Backpacking?"),
            new Note("NativeScript ausprobieren", "Vielleicht erstmal im NativeScript Playground"),
            new Note("Geschenk für Mutti", "Dieses Jahr früher Gedanken machen!")
        )
    } 
 }