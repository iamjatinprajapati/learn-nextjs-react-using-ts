console.log("A valid javascript is valid typescript.");

let x = 10;
let y: number = 30;
class Lesson1 {
  sum = 0;
  constructor() {
    this.sum = x + y;
  }

  showSum() {
    return `The sum of ${x} + ${y} = ${this.sum}`;
  }
}

export { Lesson1 };
