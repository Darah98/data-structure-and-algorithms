'use strict';
function binarySearch(storedArr, srchKey) {
  let indexOf = -1;
  for (let i = 0; i < storedArr.length; i++) {
    if (storedArr[i] === srchKey) {
      indexOf = i;
    }
  }
  return indexOf;
}
console.log(binarySearch([4, 8, 15, 16, 23, 42], 15));
console.log(binarySearch([11, 22, 33, 44, 55, 66, 77], 90));
