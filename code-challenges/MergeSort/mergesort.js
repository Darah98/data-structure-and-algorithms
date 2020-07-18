function mergeSort(arr){
  const n= arr.length;
  if(n>1){
    const mid= Math.ceil(n/2);
    const left= arr.slice(0,mid);
    const right= arr.slice(mid, n);
    mergeSort(left);
    mergeSort(right);
    merge(left, right, arr);
  }
  return arr;
}
function merge(left, right, arr){
  let i =0;
  let j =0;
  let k =0;
  while(i<left.length && j<right.length){
    if(left[i]<=right[j]){
      arr[k]=left[i];
      i++;
    } else {
      arr[k]=right[j];
      j++;
    }
    k++;
  }
  if(i===left.length){
    while(j<right.length){
      arr[k]= right[j];
      j++;
      k++
    }
  } else {
    while(i<left.length){
      arr[k]=left[i];
      i++;
      k++;
    }
  }
  console.log(arr);
  return arr;
}
mergeSort([8,4,23,42,16,15]);
// mergeSort([20,18,12,8,5,-2]);
// mergeSort([5,12,7,5,5,7]);
// mergeSort([2,3,5,7,13,11]);
