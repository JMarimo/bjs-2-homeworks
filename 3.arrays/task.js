    function compareArrays(arr1, arr2) {
        if(arr1.length != arr2.length) {
          return false;
        }
         return arr1.every(function(elem, index){
            return elem === arr2[index];
         });
      }
  

function getUsersNamesInAgeRange(users, gender) {
}