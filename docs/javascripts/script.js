s = 600
setup = _ => {
  createCanvas(s, s)
  pixelDensity(0.3)
}
draw = _ => {
  textSize(70)
  text(this, 0, s/2)
  loadPixels()
  for (i = 0; i < 90000; i += map(mouseX, 0, s, 2, 32)) {
    for (j = 0; j < 3; j++){
      pixels[i * 4 + j] ^= 255
    }
  }
  updatePixels()
}