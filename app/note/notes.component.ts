import { Component } from "@angular/core";
import * as Dialogs from "ui/dialogs";

import { Note } from "./note.model";

@Component({
    moduleId: module.id,
    selector: "nn-notes",
    templateUrl: "notes.component.xml",
    styleUrls: ["notes.component.css"]
})

export class NotesComponent {

    public notes: Array<Note> = [
        new Note("Themen für Meeting", "Im Meeting am Montag auf jeden Fall die festgelegten Themen ansprechen!"),
        new Note("Urlaubsziele", "Entspannen am Strand, in die Berge oder doch lieber Backpacking?"),
        new Note("NativeScript ausprobieren", "Vielleicht erstmal im NativeScript Playground"),
        new Note("Geschenk für Mutti", "Dieses Jahr früher Gedanken machen!")
    ];

    public addNote() {
        const options = {
            title: "Titel eingeben",
            inputType: Dialogs.inputType.text,
            okButtonText: "Erstellen",
            cancelButtonText: "Abbrechen"
        }
        Dialogs.prompt(options).then((promptResult: Dialogs.PromptResult) => {
            if (!promptResult.result) return;
            const title = promptResult.text.trim();
            if (title.length > 0) {
                this.notes.push(new Note(title, ""))
            }
        })
    }
}
