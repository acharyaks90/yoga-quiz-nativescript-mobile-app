import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";
import { SocialComponent } from "./home/social/social.component";
import { StartTestComponent } from "./start-test/start-test.component";

const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "items", component: ItemsComponent },
    { path: "item/:id", component: ItemDetailComponent },
    { path: "home", component : SocialComponent },
    { path: "test", component : StartTestComponent },
      { path: "quiz", loadChildren: "./quiz/quiz.module#QuizModule" },
    { path: "score", loadChildren: "./score/score.module#ScoreModule" }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
