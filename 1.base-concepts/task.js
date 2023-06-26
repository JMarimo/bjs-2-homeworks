"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  
  const d = b ** 2 - 4 * a * c;

  if (d < 0) {
      return arr;
  }
 
  if (d === 0) {
      arr.push(-b / (2 * a));
      return arr;
  }

  if (d > 0) {
      arr.push((-b + Math.sqrt(d)) / (2 * a));
      arr.push((-b - Math.sqrt(d)) / (2 * a));
      return arr;
  }
};


function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  if (isNaN(percent) || isNaN(contribution)  ||  isNaN(amount)  || isNaN(countMonths)  ) {
      return false;
    }
    let p = 1 / 12 / 100 * percent;
    let body = amount - contribution;
    let monthlyPayment = body * (p + (p / (((1 + p) ** countMonths) - 1)));
  
    let clientTotalAmount = monthlyPayment * countMonths;
  
    clientTotalAmount = Math.round(clientTotalAmount * 100) / 100;
  
    return clientTotalAmount;
  };