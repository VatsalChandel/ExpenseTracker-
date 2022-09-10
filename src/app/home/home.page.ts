import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  expenseTracker = [{
    itemName : "iPad",
    itemDate : "September 10, 2022",
    itemPrice : "500",
    itemCategory : "Education"
  },
  {
    itemName : "iPhone",
    itemDate : "May 15, 2022",
    itemPrice : "1000",
    itemCategory : "Social"
  }]

  today : number = Date.now()

  constructor() {}

}
