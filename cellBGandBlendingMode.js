var imageDiv = document.getElementsByClassName('product-image')

if (imageDiv.length == 0) {
imageDiv = document.getElementsByClassName('thumbnail')
}

var greyRGB = prompt("Please insert your grey RGB value i.e 240","240")

var blendingMode = prompt("Please type a blending mode out of one of the following: \n \n normal|multiply|screen|overlay|darken|lighten|color-dodge|color-burn|difference|exclusion|hue|saturation|color|luminosity;","multiply")

for (var a = 0;a<imageDiv.length;a++) {
imageDiv[a].style.backgroundColor = "rgb(" + greyRGB + "," + greyRGB + "," + greyRGB + ")";
imageDiv[a].children[0].children[0].style = "mix-blend-mode: " + blendingMode;
}
