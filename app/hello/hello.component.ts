import { Component } from "@angular/core";

@Component({
    moduleId: module.id,
    selector: "nn-hello",
    templateUrl: "hello.component.xml"
})

export class HelloComponent { 
    public helloText:string = "Hallo Welt!"
}
