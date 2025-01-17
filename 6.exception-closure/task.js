﻿function parseCount(parseValue) {
let parseResult = null;
parseResult = Number.parseFloat(parseValue);
if (Number.isNaN(parseResult)) {
    throw new Error("Невалидное значение");
}
return(parseResult);
};

function validateCount(parseValue) {
try {
    return parseCount(parseValue);
}
catch (error) {
    return error;
}
};


class Triangle {
    constructor(a, b, c) {
      this.a = a;
      this.b = b;
      this.c = c;
      if (a + b < c || b + c < a || a + c < b) {
        throw new Error("Треугольник с такими сторонами не существует");
      }
    }

    get perimeter() {
      return this.a + this.b + this.c;
    }

    get area() {
      const halfp = this.perimeter / 2;
      return parseFloat(
        Math.sqrt(halfp * (halfp - this.a) * (halfp - this.b) * (halfp - this.c)).toFixed(3)
      );
    }
  }
  
  function getTriangle(a, b, c) {
    try {
      return new Triangle(a, b, c);
    } catch (error) {
      return {
        get perimeter() {
          return "Ошибка! Треугольник не существует";
        },
        get area() {
          return "Ошибка! Треугольник не существует";
        },
      };
    }
  }