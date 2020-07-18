function quickSort(arr, left, right){
  if(left<right){
    let position= partition(arr, left, right);
    quickSort(arr, left, position-1);
    quickSort(arr, position +1, right);
    console.log(arr);
    return arr;
  }
}
function partition(arr, left, right){
  let pivot=arr[right];
  let low= left-1;
  for(let i =left; i<right; i++){
    if(arr[i]<=pivot){
      low++;
      swap(arr, i, low)
    }
  }
  swap(arr, right, low+1)
  return low+1;
}
function swap(arr, i, low){
  let temp;
  temp= arr[i];
  arr[i]= arr[low];
  arr[low]= temp;
}
quickSort([8,4,23,42,16,15], 0, 5);
// quickSort([20,18,12,8,5,-2], 0, 5);
// quickSort([5,12,7,5,5,7], 0, 5);
// quickSort([2,3,5,7,13,11], 0, 5);
