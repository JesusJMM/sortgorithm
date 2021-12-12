import { useRef, useEffect } from "react"
import { subscribe, unsubscribe } from '../../lib/render';
import { createArrRandom, roundArr } from '../../lib/arrays.js'
import Line from '../../lib/line.js'

export default function BubleSort(props) {
  const canvas = useRef(null)
  let ctx = useRef(null)
  let array = useRef([])
  let lines = useRef({})
  let target = useRef(0)
  const sortF = useRef(props.sortFunction())
  // setup
  useEffect(() => {
    canvas.current.width = 500
    canvas.current.height = 500
    ctx.current = canvas.current.getContext('2d')
    ctx.current.lineWidth = 4
    ctx.current.lineCap = 'round'
  }, [])
  // update Function
  useEffect(() => {
    sortF.current = props.sortFunction()
  }, [props.sortFunction, props])
  // update the array
  useEffect(() => {
    array.current = createArrRandom(props.elements, 0, 1)
    const step = canvas.current.width / array.current.length
    for (let i = 0; i < array.current.length; i++) {
      lines.current[array.current[i]] = new Line(ctx.current, i * step + step / 2, 0, array.current[i] * (canvas.current.height - 10), Math.PI / 2)
    }
  }, [props.elements, props.restart])
  // update the target 
  useEffect(() => {
    target.current = array.current[props.target]
  }, [props.target, props.elements, props.restart])
  // draw the lines in canvas
  useEffect(() => {
    let arr = array.current
    const step = canvas.current.width / arr.length
    function draw() {
      if (props.play && props.elements > 0) {
        array.current = sortF.current(arr)
      }
      arr = array.current
      // draw
      ctx.current.clearRect(0, 0, canvas.current.width, canvas.current.height)
      for (let i = 0; i < arr.length; i++) {
        ctx.current.strokeStyle = '#0007'
        if (arr[i] === target.current) ctx.current.strokeStyle = 'orange'
        lines.current[arr[i]].lerpPos(i * step + step / 2, 0)
        lines.current[arr[i]].draw()
      }
      ctx.current.closePath()
    }
    subscribe(draw)
    return () => unsubscribe(draw)
  }, [props.elements, props.target, props.play, props])
  return (
    <canvas ref={canvas}>
    </canvas>
  )
}
