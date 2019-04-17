import { ItemEventData } from "tns-core-modules/ui/list-view"
import { Component, OnInit } from "@angular/core";
import { Page } from "tns-core-modules/ui/page";
import { ios } from "tns-core-modules/application";
declare var UITableViewCellSelectionStyle;

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    countries: { name: string, imageSrc: string }[] = [
        { name: "", imageSrc: "" },
        { name: "", imageSrc: "" },
        { name: "", imageSrc: "" },
        { name: "", imageSrc: "" },
        { name: "", imageSrc: "" },
        { name: "", imageSrc: "" },
        { name: "", imageSrc: "" }
    ];

    onItemTap(args: ItemEventData): void {
    }

    constructor(
        private page: Page
    ) {
        this.page.actionBarHidden = true;
    }

    ngOnInit(): void {
    }

    onItemLoading(args: any) {
        if (ios) {
            const cell = args.ios;
            cell.selectionStyle = UITableViewCellSelectionStyle.UITableViewCellSelectionStyleNone;
        }
    }

    tabSelected(args: number) {
        console.log("tab selected: " + args);
    }
}
