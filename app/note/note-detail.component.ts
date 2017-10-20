import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Note } from "./note.model";
import { NoteService } from "./note.service";

@Component({
    moduleId: module.id,
    selector: "nn-note-detail",
    templateUrl: "note-detail.component.xml"
})

export class NoteDetailComponent implements OnInit {

    public note: Note;

    constructor(private activatedRoute: ActivatedRoute,
        private noteService: NoteService) { }

    ngOnInit() {
        const noteId = this.activatedRoute.snapshot.params["id"];
        this.note = this.noteService.oneNote(noteId);
    }
}
