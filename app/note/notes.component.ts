import { Component } from "@angular/core";
import * as Dialogs from "ui/dialogs";

import { Note } from "./note.model";
import { NoteService } from "./note.service";

@Component({
    moduleId: module.id,
    selector: "nn-notes",
    templateUrl: "notes.component.xml",
    styleUrls: ["notes.component.css"]
})

export class NotesComponent {

    public notes:Array<Note> = [];

    constructor(private noteService:NoteService) {
        this.notes = noteService.allNotes();
    }

    public addNote() {
        let options = {
            title: "Titel eingeben",
            inputType: Dialogs.inputType.text,
            okButtonText: "Erstellen",
            cancelButtonText: "Abbrechen"
        }

        Dialogs.prompt(options).then((promptResult: Dialogs.PromptResult) => {
            if (!promptResult.result) return;
            let title = promptResult.text.trim();
            if (title.length > 0) {
                this.noteService.createNote(title, "");
            }
        })
    }
 }
