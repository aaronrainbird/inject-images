
if (window.location.href.search("net") > -1) {

var imageDiv = document.getElementsByClassName('product-image')

if (imageDiv.length == 0) {
imageDiv = document.getElementsByClassName('thumbnail')
}

var RGB = prompt("Please insert your RGB values:","240,240,240")

var blendingMode = prompt("Please type a blending mode out of one of the following: \n \n normal|multiply|screen|overlay|darken|lighten|color-dodge|color-burn|difference|exclusion|hue|saturation|color|luminosity;","multiply")

for (var a = 0;a<imageDiv.length;a++) {
imageDiv[a].style.backgroundColor = "rgb(" + RGB + ")";
imageDiv[a].style.padding = "20px 20px 20px 20px";
imageDiv[a].children[0].style = "mix-blend-mode: " + blendingMode;
}

}
else if(window.location.href.search("mrp") > -1) {
// mrp version

var imageDiv = document.getElementsByClassName('pl-products-item__img')

if (imageDiv.length == 0) {
imageDiv = document.getElementsByClassName('product-image');

var RGB = prompt("Please insert your RGB values:","240,240,240")

var blendingMode = prompt("Please type a blending mode out of one of the following: \n \n normal|multiply|screen|overlay|darken|lighten|color-dodge|color-burn|difference|exclusion|hue|saturation|color|luminosity;","multiply")

for (var a = 0;a<imageDiv.length;a++) {
imageDiv[a].style.backgroundColor = "rgb(" + RGB + ")";
imageDiv[a].style.padding = "0px";
imageDiv[a].style.margin = "0 10px 0 0"
imageDiv[a].style.height = "245px";
imageDiv[a].style.border = "10px solid rgb(" + RGB + ")";
imageDiv[a].style.width = "220px";
imageDiv[a].children[0].style = "mix-blend-mode: " + blendingMode;
// imageDiv[a].children[0].height = "";
}

} 

else {

var RGB = prompt("Please insert your RGB values:","240,240,240")

var blendingMode = prompt("Please type a blending mode out of one of the following: \n \n normal|multiply|screen|overlay|darken|lighten|color-dodge|color-burn|difference|exclusion|hue|saturation|color|luminosity;","multiply")

for (var a = 0;a<imageDiv.length;a++) {
imageDiv[a].style.backgroundColor = "rgb(" + RGB + ")";
imageDiv[a].style.padding = "0px";
imageDiv[a].style.height = "230px";
imageDiv[a].style.border = "10px solid rgb(" + RGB + ")";
imageDiv[a].children[0].style = "mix-blend-mode: " + blendingMode;
imageDiv[a].children[0].height = "";
}
}
}
else {
alert("You don't seem to be on any of the YNAP sites.")
}
