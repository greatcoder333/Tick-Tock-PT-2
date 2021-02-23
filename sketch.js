var hr, min, sec


function setup() {
  createCanvas(800,400);
  angleMode(DEGREES)
}

function draw() {
  background(0,255,0);  
  drawSprites();
  hr = hour()
  min = minute()
  sec = second()
  translate(200,200)
  rotate(-90)

 secAngle = map(sec,0,60,0,360)
 push()
 rotate(secAngle)
 stroke("red")
 strokeWeight(7)
 line(0,0,100,0)
 pop()
 noFill()
stroke("red")
strokeWeight(7)
arc(0,0,300,400,0,secAngle)

 minAngle = map(min,0,60,0,360)
 push()
 rotate(minAngle)
 stroke("blue")
 strokeWeight(7)
 line(0,0,100,0)
 pop()
 noFill()
 stroke("blue")
 strokeWeight(7)
 arc(0,0,300,400,0,minAngle)

 hrAngle = map(hr,0,12,0,360)
 push()
 rotate(hrAngle)
 stroke("yellow")
 strokeWeight(7)
 line(0,0,100,0)
 pop()
 stroke("yellow")
strokeWeight(7)
arc(0,0,300,400,0,hrAngle)
}