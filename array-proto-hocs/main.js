"use strict";

function compareArrays(arr1, arr2) {

  for (let i = 0; i < arr1.length; i++) {
    if (arr1.includes(arr2[i]) && arr1.indexOf(arr2[i]) === i) {
      console.log(true);
    } else {
      console.log(false);
    } 
  }
 
   

  /*if (arr1.length === arr2.length) && {
    return true;
  } else {
    return false;
  }
    }
*/


}


compareArrays([2,5,6], [1,4,5]);