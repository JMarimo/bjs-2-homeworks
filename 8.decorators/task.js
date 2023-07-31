//Задача № 1
const md5 = require('./js-md5.js');

function cachingDecoratorNew(func) {
  let cache = [];
  function wrapper(...args) {
    const hash = md5(args);
    let objectInCache = cache.find( item => item.hash === hash);
    if (objectInCache) {
      return `Из кэша: ${objectInCache.value}`;
    }
    let result = func(...args);
    cache.push({"hash": hash, "value": result});
    if (cache.length > 5) {
      cache.shift();
    }
    return `Вычисляем: ${result}`;
  }
  return wrapper;
}

module.exports = {
  cachingDecoratorNew
}

//Задача № 2
function debounceDecoratorNew(func, delay) {
    let timeoutId;
    let isTrottled = false;
    function wrapper(...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout( () => {
        func(args);
        wrapper.count++;
      }, delay);
      if (!isTrottled) {
        func(...args);
        wrapper.count++;
        isTrottled = true;
      }
      wrapper.allCount++;
    }
    wrapper.count = 0;
    wrapper.allCount = 0;
    return wrapper;
  }

module.exports = {
  debounceDecoratorNew, 
}