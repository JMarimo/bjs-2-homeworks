function getArrayParams(...arr) {
    
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;
  for(let i=0; i < arr.length; i++){
    if(arr[i] > max){
      max = arr[i];
    }
    if (arr[i] < min){
      min = arr[i];
    }
    sum += arr[i];
  }
    avg = +(sum / arr.length).toFixed(2);
  
  return { min: min, max: max, avg: avg };
}

//=========================

function summElementsWorker(...arr) {
  sum = 0;
  
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
    return sum;
};

function differenceMaxMinWorker(...arr) {

  if (arr.length === 0) {
    return 0;
  }

  let max = Math.max(...arr);
  let min = Math.min(...arr);
       
  return max - min;;
  };

function differenceEvenOddWorker(...arr) {

  if (arr.length === 0) {
    return 0;
  }
  
  let sumEvenElement = 0, sumOddElement = 0;
 
  for(let i = 0; i < arr.length; i++) {
    if ((arr[i] % 2) === 0) {
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
    }
  }

  return sumEvenElement - sumOddElement;
};

function averageEvenElementsWorker(...arr) {

  if (arr.length === 0) {
    return 0;
  }
  
  let sumEvenElement = 0, countEvenElement = 0;
  
  for (let i = 0; i < arr.length; i++) {
  
    for(let i = 0; i < arr.length; i++) {
      if (arr[i] % 2) { 
        sumOddElement += arr[i];
      } else {
        sumEvenElement += arr[i];
      }
    }
 return sumEvenElement / countEvenElement;
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