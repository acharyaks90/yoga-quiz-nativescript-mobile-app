import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: "ns-app",
    moduleId: module.id,
    templateUrl: "./app.component.html"
})
export class AppComponent { 
    constructor(private router : Router){

    }
    tabSelected(args: number){
        console.log("tab selected: " + args);
        if(args == 1)
        this.router.navigate(["test"]);
        else if(args == 0)
        this.router.navigate(["home"]);
    }
}
