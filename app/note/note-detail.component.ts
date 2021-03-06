import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import * as imagepicker from "nativescript-imagepicker";
import { RouterExtensions } from "nativescript-angular/router";
import { isAndroid, isIOS } from "platform";

import { Note } from "./note.model";
import { NoteService } from "./note.service";

@Component({
    moduleId: module.id,
    selector: "nn-note-detail",
    templateUrl: "note-detail.component.xml"
})

export class NoteDetailComponent implements OnInit {

    public isAndroid: boolean = isAndroid;
    public isIOS: boolean = isIOS;

    public note: Note;

    constructor(private activatedRoute: ActivatedRoute,
        private noteService: NoteService, private routerExtensions: RouterExtensions) { }

    ngOnInit() {
        const noteId = this.activatedRoute.snapshot.params["id"];
        this.note = this.noteService.oneNote(noteId);
    }

    public addImage() {
        const context = imagepicker.create({mode: "single"});
        context
            .authorize()
            .then(() => context.present())
            .then((selection: imagepicker.SelectedAsset[]) => {
                if(selection.length > 0) {
                    this.note.imageSource = selection[0].fileUri;
                }
            });
    }

    public goBack() {
        this.routerExtensions.backToPreviousPage();
    }
}
