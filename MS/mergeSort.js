function mergeSort(arr) {
  if (arr.length < 2) {
    return arr; 
  }

  const middle = Math.floor(arr.length / 2);

  return merge(mergeSort(arr.slice(0, middle)), mergeSort(arr.slice(middle))); // Merge the sorted halves
}

function merge(left, right) {
  const result = [];
  let li = 0;
  let ri = 0;

  while(li < left.length && ri < right.length){
    if (left[li] < right[ri]) {
      result.push(left[li])
      li++
    }
      result.push(right[ri])
      ri++
    
  }

 
  return result.concat(left.slice(li), right.slice(ri))

}

console.log = mergeSort([64, 34, 25, 1, 54, 2, 22, 11, 90]);