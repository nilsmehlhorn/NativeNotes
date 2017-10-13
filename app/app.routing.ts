import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { HelloComponent } from "./hello/hello.component";

const routes: Routes = [
    { path: "", redirectTo: "/hello", pathMatch: "full" },
    { path: "hello", component: HelloComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }