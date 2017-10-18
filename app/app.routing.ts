import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { NotesComponent } from "./note/notes.component";

const routes: Routes = [
    { path: "", redirectTo: "/notes", pathMatch: "full" },
    { path: "notes", component: NotesComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }