
var imageType = "";
var pidsPath = "";

var arImageTypes = ["in","rw","fr","bk","ou","ou2","ou3","cu","e1","e2","e3","e4","e5","e6","e7","e8","sw"];
var site = "NAP";
var subSite = "";
var imageClass = "";  
var typeOfImages = 0;
var filename = "";

var napImageWidth = 390;
var napImageHeight = 585;

var i = 0;
var j = 0;
var a = 0;
var b = 0;



var tableHTML = "<html><body><table class='tg' style='text-align: center; font-family: Georgia; border: 1px solid black;'><tr>"

injectImages()

function injectImages() {

for (var z = 0;z<arImageTypes.length;z++) {
    tableHTML += "<th class='header'>" + arImageTypes[z] + "</th>"
}

 tableHTML += "</tr><tr>"

    
for (i = 0; i < arPIDs.length; i++) {
    
    
    
            for (a = 0; a < arImageTypes.length;a++) {
                tableCell();
               
            }
    tableHTML += "</tr><tr>"
            for (b = 0; a < arImageTypes.length;a++) {
                tableCellText();
            }
    tableHTML += "</tr><tr>"    
        }
    
tableHTML += "</tr></table>";

var x = window.open();
x.document.open();
x.document.write(tableHTML);
x.document.close();

}
    
function tableCell() {
tableHTML += "<td class='columns' style='background-color: lightgrey;'><IMG SRC='" + "https://cache.net-a-porter.com/images/products/" + arPIDs[i] + "/" + arPIDs[i] + "_" + arImageTypes[a] + "_pp.jpg?" + escape(new Date()) + "' width='" + napImageWidth + "px' height='" + napImageHeight + "px'>";
}

function tableCellText() {
tableHTML += "<td class='columns' style='background-color: lightgrey;'>" + arPIDs[i] + "_" + arImageTypes[a];
}

