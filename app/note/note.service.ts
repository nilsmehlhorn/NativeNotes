import { Injectable } from "@angular/core";

import { Note } from "./note.model";

@Injectable()
export class NoteService {

    private static INDEX = 0;

    private notes: Array<Note> = [];

    constructor() {
        this.createNote("Themen für Meeting", "Im Meeting am Montag auf jeden Fall die festgelegten Themen ansprechen!")
        this.createNote("Urlaubsziele", "Entpannen am Strand, in die Berge oder doch lieber Backpacking?")
        this.createNote("NativeScript ausprobieren", "Vielleicht erstmal im NativeScript Playground")
        this.createNote("Geschenk für Mutti", "Dieses Jahr früher Gedanken machen!")
    }

    public allNotes() {
        return this.notes;
    }

    public oneNote(id: number) {
        return this.notes.find(note => note.id == id);
    }

    public createNote(title: string, content: string) {
        this.notes.push(new Note(NoteService.INDEX++, title, content))
    }

}