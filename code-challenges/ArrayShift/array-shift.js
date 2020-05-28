'use strict';

function insertShiftArray(arr, midVal) {
  let midIdx = Math.floor(arr.length / 2);
  let newArr = [];
  for (let i = 0; i <= arr.length; i++) {
    //   console.log(midIdx);
    if (i === midIdx) {
      arr[midIdx] = midVal;
    } else if (i > midVal) {
      newArr[i] = arr[i - 1];
    } else {
      newArr[i] = arr[i];
    }
  }
  console.log(newArr);
}
insertShiftArray([12, 14, 11, 10], 0);
