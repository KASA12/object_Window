s = 600
setup = _ => {
  createCanvas(s, s)
  pixelDensity(0.5)
}
draw = _ => {
  textSize(75)
  fill(50)
  text(this, 0, s/2)
  loadPixels()
  for (i = 0; i < 90000; i += map(mouseX, 0, s, 2, 32)) {
    for (j = 0; j < 3; j++){
      pixels[i * 4 + j] ^= 255
    }
  }
  updatePixels()
}