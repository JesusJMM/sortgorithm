export default class Line {
  constructor(ctx ,x, y, len, angle){
    this.ctx = ctx
    this.x = x
    this.y = y
    this.len = len
    this.angle = angle
  }
  draw(){
    const x2 = this.x + (Math.cos(this.angle) * this.len)
    const y2 = this.y + (Math.sin(this.angle) * this.len)
    this.ctx.beginPath()
    this.ctx.moveTo(this.x, this.y)
    this.ctx.lineTo(x2, y2)
    this.ctx.stroke()
    this.ctx.closePath()
  }
  lerp(v0, v1, t){
    return v0 + t * (v1 - v0)
  }
  lerpPos(x, y){
    this.x = this.lerp(this.x, x, 0.2)
    this.y = this.lerp(this.y, y, 0.2)
  }
}
