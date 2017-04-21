var imageType = "";
var pidsPath = "";

var arImageTypes = ["in","rw","fr","bk","ou","ou2","ou3","cu","e1","e2","e3","e4","e5","e6","e7","e8","sw"];
var tableHTML = "";

var site = "TON";
var subSite = "";
var imageClass = "";  
var typeOfImages = 0;
var filename = "";
var imageTypeAmount = "";

var napImageWidth = 180;
var napImageHeight = 270;

var i = 0;
var j = 0;
var a = 0;
var b = 0;
var arPIDs = [];

function injectImages(number) {
    tableHTML = "<html><body><table class='tg' style='text-align: center; font-family: Georgia; border: 1px solid black;'><tr>"
    arImageTypesIndividual = [];
    arImageTypes = ["in","rw","fr","bk","ou","ou2","ou3","cu","e1","e2","e3","e4","e5","e6","e7","e8","sw"];
    arPIDs = document.getElementsByClassName('arrays')[number].value.split(',')
    imageTypeAmount = prompt('What image would you like to view? \n0. All Images \n1. IN\n2. RW\n3. FR\n4. BK\n5. OU\n6. OU2\n7. OU3\n8. CU\n9. E1\n10. E2\n11. E3\n12. E4\n13. E5\n14. E6\n15. E7\n16. E8\n17. SW');
        
    if (imageTypeAmount > 0) {
        arImageTypesIndividual.push(arImageTypes[imageTypeAmount-1])
     
      for (var z = 0;z<8;z++) {
    tableHTML += "<th class='header'>" + arImageTypesIndividual[0] + "</th>"
        }
    }
    else {   
        for (var z = 0;z<arImageTypes.length;z++) {
    tableHTML += "<th class='header'>" + arImageTypes[z] + "</th>"
        }
    }

    tableHTML += "</tr><tr>"
 
     for (i = 0; i < arPIDs.length; i++) {
        
         
         if (arImageTypesIndividual.length == 1 && i > 0 && i % 8 == 0)   {
             tableHTML += "</tr><tr>"  
         } 
         
         if (arImageTypesIndividual.length == 1) {
             tableCell();  
         }
         else {
         for (a = 0; a < arImageTypes.length;a++) {
                tableCell();  
            }
         }
         if (arImageTypesIndividual.length != 1) {
             tableHTML += "</tr><tr>"  
         }  
     }
tableHTML += "</tr></table>";

var x = window.open();
x.document.open();
x.document.write(tableHTML);
x.document.close();

}
    
function tableCell() {
    if (arImageTypesIndividual.length == 1) {
        tableHTML += "<td class='columns' style='background-color: lightgrey;'><IMG SRC='https://cache.net-a-porter.com/images/products/" + arPIDs[i] + "/" + arPIDs[i] + "_" + arImageTypesIndividual[0] + "_sl.jpg?" + escape(new Date()) + "'><BR>" + arPIDs[i] + "_" + arImageTypesIndividual[0] + "</td>";
    }
    else {
        tableHTML += "<td class='columns' style='background-color: lightgrey;'><IMG SRC='https://cache.net-a-porter.com/images/products/" + arPIDs[i] + "/" + arPIDs[i] + "_" + arImageTypes[a] + "_sl.jpg?" + escape(new Date()) + "'><BR>" + arPIDs[i] + "_" + arImageTypes[a] + "</td>";
    }
}



Contact GitHub API Training Shop Blog About
© 2017 GitHub, Inc. Terms Privacy Security Status Help