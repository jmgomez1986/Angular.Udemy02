import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-task2',
  templateUrl: './app-task2.component.html',
  styleUrls: ['./app-task2.component.css']
})
export class AppTask2Component implements OnInit {
  showSecret = false;
  log = [];

  constructor() { }

  ngOnInit() {
  }

  onTogleDetails() {
    this.showSecret = !this.showSecret;
    // this.log.push(this.log.length + 1);
    this.log.push(new Date());
  }

}
