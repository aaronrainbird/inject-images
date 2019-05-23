var imageDiv = document.getElementsByClassName('product-image')

document.getElementsByClassName('product-list-view-and-sort')[0].innerHTML = "<div><input type='color' id='head' onchange='changeBackgroundColour()' name='head'         value='#dddddd'><label for='head'>  Background Colour</label></div>"

function changeBackgroundColour() {
var imageColour = document.getElementById('head').value;
for (var a = 0;a<imageDiv.length;a++) {
imageDiv[a].style.backgroundColor = imageColour;
imageDiv[a].children[0].children[0].style = "mix-blend-mode: multiply"
}
}



