// problem solvings

var arr = [1, 2, 3, 4];
var x = 3;

function search(arr, x) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == x) {
      return i;
    }
  }
  return -1;
}

var res = search(arr, x);
console.log(res);

arr = [10, 8, 30, 4, 5];
x = 5;

res = search(arr, x);
console.log(res);

arr = [10, 8, 30];
res = search(arr, x);
console.log(res);

class Solution {
  /**
    * @param number[] arr

    * @returns number
    */

  // code here
  largeNum(arr) {
    var maxNum = arr[0];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] > maxNum) {
        maxNum = arr[i];
      }
    }
    return maxNum;
  }
}

// Reverse an array
var revArr = [];
function reverseArray(arr) {
  for (var i = arr.length - 1; i >= 0; i--) {
    revArr.push(arr[i]);
  }
  return revArr;
}

console.log(reverseArray([1, 2, 3, 4, 5, 6]));
