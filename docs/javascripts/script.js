s = 600
d = 0.3
setup = _ => {
  createCanvas(s, s);
  pixelDensity(d)
}
draw = _ => {
  textSize(70)
  text(this, 0, s/2)
  loadPixels()
  p = pixels;
  for (i = 0; i < 90000; i += map(mouseX, 0, s, 2, 32)) {
    for (j = 0; j < 3; j++){
      p[i * 4 + j] ^= 255
    }
  }
  updatePixels()
}