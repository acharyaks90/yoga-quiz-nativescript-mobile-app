import { Component, OnInit } from '@angular/core';
import { FileReaderService } from '../core/fileReader.service';
import { Page } from 'tns-core-modules/ui/page/page';
import { getNumber } from "tns-core-modules/application-settings";
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
  selector: 'ns-start-test',
  templateUrl: './start-test.component.html',
  styleUrls: ['./start-test.component.css'],
  moduleId: module.id,
})
export class StartTestComponent implements OnInit {
  categories: any[] = [];
  constructor(private routerExtensions: RouterExtensions,
    private page: Page,
    private fileReader: FileReaderService ) { }

  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
    this.fileReader.readJSON('/app/core/questions.json').then(
      res => {
         //console.log(res);
        this.categories = res["categories"];
        this.initializeScore();
      },
      err => {
        console.log('Error reading json: ' + JSON.stringify(err));
      }
    )
  }

  initializeScore() {
    for (let i = 0; i < this.categories.length; i++) {
      this.categories[i].lastScore = getNumber(this.categories[i].title) || '0';
    }
  }

  navigateToQuiz(index: number) {
    let navigationExtras = {
      queryParams: {
        'category': this.categories[index].title,
        'questions': JSON.stringify(this.categories[index].questions)
      }
    };
    this.routerExtensions.navigate(["/quiz"], navigationExtras);
  }

}
