import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  @Input() counter = 0
  constructor() { }

  ngOnInit(): void {
  }

  increment() {
    this.counter += 1
  }

  decrement() {
    this.counter -= 1
  }

}
