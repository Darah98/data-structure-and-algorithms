function insertShiftArray(arr, midVal) {
  let midIdx = Math.ceil(arr.length / 2);
  let newArr = [];
  for (let i = 0; i <= arr.length; i++) {
    if (i === midIdx) {
      newArr[midIdx] = midVal;
    } else if (i > midIdx) {
      newArr[i] = arr[i - 1];
    } else if (i < midIdx) {
      newArr[i] = arr[i];
    }
  }
  return newArr;
}
console.log(insertShiftArray([2, 4, 6, 8], 5));
console.log(insertShiftArray([4, 8, 15, 23, 42], 16));
