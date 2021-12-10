export function createArrRandom(len, min, max){
  let out = []
  for(let i = 0; i < len; i++){
    out.push(min + Math.random() * (max - min))
  }
  return out
}
export function roundArr(arr = []){
  return arr.map(e => Math.round(e))
}
