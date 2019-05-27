var imageDiv = document.getElementsByClassName('product-image')

if (imageDiv.length == 0) {
imageDiv = document.getElementsByClassName('thumbnail')
}

var RGB = prompt("Please insert your RGB values:","240,240,240")

var blendingMode = prompt("Please type a blending mode out of one of the following: \n \n normal|multiply|screen|overlay|darken|lighten|color-dodge|color-burn|difference|exclusion|hue|saturation|color|luminosity;","multiply")

for (var a = 0;a<imageDiv.length;a++) {
imageDiv[a].style.backgroundColor = "rgb(" + RGB + ")";
imageDiv[a].style.padding = "20px 20px 20px 20px";
imageDiv[a].children[0].children[0].style = "mix-blend-mode: " + blendingMode;
}
