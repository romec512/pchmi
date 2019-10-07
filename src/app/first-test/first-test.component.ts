import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-first-test',
  templateUrl: './first-test.component.html',
  styleUrls: ['./first-test.component.css']
})
export class FirstTestComponent implements OnInit {
  timeCounter: number;
  buttonText: string;
  router: Router;
  testNum: number;
  isTestStarted: boolean;
  currentNum: string;
  numbers = [ 'ноль', 'один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять'];
  inputNumbers = [];
  generatedNumbers = [];
  inputFieldValue = '';
  results = [];
  interval;
  result: boolean;
  constructor(private routerParam: Router) {
    this.timeCounter = 10;
    this.buttonText = 'Начать тест';
    this.router = routerParam;
    this.testNum = 0;
    this.result = false;
  }
  startTimer() {
    let index = Math.floor(Math.random() * Math.floor(9)); // от 0 до 9
    this.currentNum = this.numbers[index];
    this.generatedNumbers.push(index);
    this.interval = setInterval(() => {
      if (this.timeCounter > 0) {
        this.timeCounter--;
      } else if (this.timeCounter === 0) {
        this.countResults();
        this.isTestStarted = false;
        clearInterval(this.interval);
        this.timeCounter = 15;
        if (this.testNum === 5 ) {
          this.numbers = ['&#8381;', '&#8381;&#8381;', '&#8381;&#8381;&#8381;', '&#8381;&#8381;&#8381;&#8381;',
            '&#8381;&#8381;&#8381;&#8381;&#8381;', '&#8381;&#8381;&#8381;&#8381;&#8381;&#8381;',
            '&#8381;&#8381;&#8381;&#8381;&#8381;&#8381;&#8381;', '&#8381;&#8381;&#8381;&#8381;&#8381;&#8381;&#8381;&#8381;&#8381;',
            '&#8381;&#8381;&#8381;&#8381;&#8381;&#8381;&#8381;&#8381;&#8381;',
            '&#8381;&#8381;&#8381;&#8381;&#8381;&#8381;&#8381;&#8381;&#8381;'];
          // this.router.navigate(['/secondTest']);
        } else if (this.testNum === 10 ) {
          // Сделать выход
          this.result = true;
        }
        // this.router.navigate(['/secondTest']);
      }
    }, 1000);
    this.testNum++;
    this.isTestStarted = true;
    this.buttonText = 'Следующий тест';
  }
  numberChanged(inputValue) {
    let index = Math.floor(Math.random() * Math.floor(10)); // от 0 до 9
    this.currentNum = this.numbers[index];
    this.generatedNumbers.push(index);
    this.inputNumbers.push(Number.parseInt(inputValue));
    this.inputFieldValue = '';
  }
  countResults() {
    let count = 0;
    for (let i = 0; i < this.inputNumbers.length; i++) {
      if (this.inputNumbers[i] === this.generatedNumbers[i]) {
        count++;
      }
    }
    this.results.push(count);
    this.inputNumbers = [];
    this.generatedNumbers = [];
    console.log(this.results);
  }
  ngOnInit() {
  }

}
