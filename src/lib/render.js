let drawFunctions = []
export function subscribe(f) {
  drawFunctions.push(f)
}
export function unsubscribe(f){
  drawFunctions = drawFunctions.filter(_f => _f !== f)
}
function render(){
  requestAnimationFrame(render)
  drawFunctions.forEach(f => f())
}
render()
