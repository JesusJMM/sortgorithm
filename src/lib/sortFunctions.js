export function bubbleSort() {
  let a = 0;
  return (arr) => {
    let out = [...arr]
    if (out[a - 1] > out[a]) {
      [out[a], out[a - 1]] = [out[a - 1], out[a]]
    }
    a++
    if (a > arr.length) a = 0
    return out
  }
}

export function selectionSort(){
  let min = 0;
  let a = min;
  let minValue = min
  return (arr) => {
    let out = [...arr]
    if(out[minValue] > out[a]){
      minValue = a
    }
    if((a > out.length)){
      [out[minValue], out[min]] = [out[min], out[minValue]];
      a = min;
      if(min < out.length -1) min++;
      minValue = min;
    }

    a++
    return out
  }
}
export function mergeSortAnimated(){
  let deep = 0;
  return arr => {
    deep += 0.02
    const [out,  ] = MergeSort(arr, Math.ceil(deep))
    return out
  }
}
const max = (a, b) => a > b ? a : b;
function MergeSort(arr = [], deep){
  if(arr.length === 1){
    return [arr, 0]
  }
  let middle = Math.ceil(arr.length / 2)
  let [left , dl] = MergeSort(arr.slice(0, middle), deep)
  let [right, dr] = MergeSort(arr.slice(middle), deep)
  let maxDeep =max(dl, dr)
  if(maxDeep > deep){
    return [left.concat(right), maxDeep + 1]
  }
  return [sort(left, right), maxDeep + 1]
}
function sort(arr1, arr2){
  let idx1 = 0
  let idx2 = 0
  let out = []
  while(idx1 < arr1.length && idx2 < arr2.length){
    // console.log(arr1[idx1] , arr2[idx2])
    if(arr1[idx1] < arr2[idx2]){
      out.push(arr1[idx1])
      idx1+=1
    }else{
      out.push(arr2[idx2])
      idx2+=1
    }
  }
  if(idx1 < arr1.length){ // all the elements of the arr1 has pushed to out
    return out.concat(arr1.slice(idx1))
  }
  else {
    return out.concat(arr2.slice(idx2))
  }
}
