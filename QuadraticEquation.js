/**
 * @author Kbuczynski
 * @class QuadraticEquation
 */
class QuadraticEquation {
  /**
   * @constructor QuadraticEquation
   * @param {*} a - directional coefficient
   * @param {*} b - b value
   * @param {*} c - free expression
   */
  constructor(a = 0, b = 0, c = 0) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  /**
   * @returns {boolean/number} if you can calculate the roots of the quadratic equation then true
   */
  main() {
    const { a, b, c, isNumber, isZero, calcDelt, calcRoots } = this;

    if (isNumber(a, b, c)) {
      if (calcDelt(a, b, c) >= 0) {
        switch (calcDelt(a, b, c)) {
          case 0:
            if (isZero(a)) return false;
            else return -b / (2 * a);
          default:
            if (isZero(a)) return false;
            else return calcRoots(a, b, calcDelt(a, b, c));
        }
      } else return false;
    } else return false;
  }

  /**
   * @param {*} a - directional coefficient
   * @param {*} b - b value
   * @param {*} c - free expression
   * @returns {boolean} true if the arguments are numbers
   */
  isNumber(a, b, c) {
    if (isNaN(a) || isNaN(b) || isNaN(c)) return false;
    else return true;
  }

  /**
   * @param {number} x - the number to check if it is equal to 0
   * @returns {boolean} true if the argument is zero
   */
  isZero(x) {
    if (x == 0) return true;
    else return false;
  }

  /**
   * @param {*} a - directional coefficient
   * @param {*} b - b value
   * @param {*} c - free expression
   * @returns {number} delta
   */
  calcDelt(a, b, c) {
    return Math.pow(b, 2) - 4 * a * c;
  }

  /**
   * @param {*} a - directional coefficient
   * @param {*} b - b value
   * @param {*} c - free expression
   * @returns {object} roots of the quadratic equation
   */
  calcRoots(a, b, delta) {
    return {
      x1: (-b + Math.sqrt(delta)) / (2 * a),
      x2: (-b - Math.sqrt(delta)) / (2 * a)
    };
  }
}

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

rl.on("line", input => test(input));

let i = 0;
let j = 0;
const arrResults = [];

/**
 * @param {*} input - input data
 * @description test file structure: first line arguments after decimal point next line correct answer
 */
const test = input => {
  i++;

  if (i % 2 != 0) {
    const arr = input.split(",");
    const obj = new QuadraticEquation(arr[0], arr[1], arr[2]);
    arrResults.push(obj.main());
    j++;
  } else {
    const arr = input.split(" ");

    switch (arr.length) {
      case 2:
        if (arr[0] == arrResults[j - 1].x1 && arr[1] == arrResults[j - 1].x2) {
          return console.log(
            `x1: ${arrResults[j - 1].x1} x2: ${arrResults[j - 1].x2} true`
          );
        } else return console.log("false");
      case 1:
        if (isNaN(arr[0])) {
          if (arr[0].toString() == arrResults[j - 1].toString()) {
            return console.log(`${arrResults[j - 1]} true`);
          } else {
            return console.log("false");
          }
        } else {
          if (arr[0] == arrResults[j - 1]) {
            return console.log(`x1: ${arrResults[j - 1]} true`);
          } else return console.log("false");
        }
      default:
        break;
    }
  }
};
