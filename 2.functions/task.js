function getArrayParams(...arr) {
 
  let min = +arr[0], max = +arr[0], sum = 0, count = 0, result = 0;
 
  for (let i = 0; i < arr.length; i++) {
    count++;
    sum += arr[i];
 
    if (arr[i] > max) {
      max = arr[i];
    }

    if (arr[i] < min) {
      min = arr[i];
    }

    result = +(sum / count);
    avg = +(result.toFixed(2));
  }

  return { min: min, max: max, avg: avg };
};

//=========================

function summElementsWorker(...arr) {
  
  if (arr.length === 0) {
    return 0;
  }
  
  let sumElementsArray = 0;
 
  for (let i = 0; i < arr.length; i++) {
    sumElementsArray += arr[i];
  }
  
  return sumElementsArray;
};

function differenceMaxMinWorker(...arr) {

  if (arr.length === 0) {
    return 0;
  }

  let max = 0, min = 0;

  for (let i = 0; i < arr.length; i++) {
    max = Math.max(...arr);
    min = Math.min(...arr);
  
    let differenceMaxMin = +(max - min);
    
    return differenceMaxMin;
  }
};

function differenceEvenOddWorker(...arr) {

  if (arr.length === 0) {
    return 0;
  }
  
  let sumEvenElement = 0, sumOddElement = 0;
 
  let difference;

  for(let i = 0; i < arr.length; i++) {
    if ((arr[i] % 2) === 0) {
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
    }
  }

  difference = +(sumEvenElement - sumOddElement);

  return difference;
};

function averageEvenElementsWorker(...arr) {

  if (arr.length === 0) {
    return 0;
  }
  
  let sumEvenElement = 0, countEvenElement = 0, result = 0;
  
  for (let i = 0; i < arr.length; i++) {
  
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
      countEvenElement++;
    }
  }
 
  result = +(sumEvenElement / countEvenElement);
 
  return result;
};

//===========================

function makeWork(arrOfArr, func) {
  
  let maxWorkerResult = -Infinity;
  
  for (let i = 0; i < arrOfArr.length; i++) {
 
    const result = func(...arrOfArr[i]);
    
    if (result > maxWorkerResult) {
      maxWorkerResult = result;
    }
  }
  
  return maxWorkerResult;
};