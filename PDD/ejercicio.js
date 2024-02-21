function consecutive( arr, a, b){
  for(var i=0; i<arr.length -1; i++){
    if((arr[i] === a && arr[i + 1] === b) || (arr[i] === b && arr[i + 1] === a))return true;
  }
  return false
}

console.log(consecutive([1,3,5,7], 5,7));