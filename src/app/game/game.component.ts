import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
})
export class GameComponent implements OnInit {
  // oddNumber: number = 0;
  // evenNumber: number = 0;
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  counter = 0;
  interval!: any;

  constructor() {}

  ngOnInit(): void {}

  startCounter() {
    console.log(typeof setInterval);
    console.log('started');

    this.interval = setInterval(() => {
      this.counter++;
      if (this.counter % 2 === 0) {
        // this.evenNumber = this.counter;
        this.evenNumbers.push(this.counter);
      } else {
        // this.oddNumber = this.counter;
        this.oddNumbers.push(this.counter);
      }
    }, 1000);
  }

  pauseCounter() {
    console.log('paused');
    clearInterval(this.interval);
  }
  endCounter() {
    console.log('ended');
    //   this.oddNumber=0;
    // this.evenNumber = 0;
    this.counter = 0;
    clearInterval(this.interval);
    this.oddNumbers = [];
    this.evenNumbers = [];
  }
}
