//  classificationSecondCategory = classificationSecondCategory.substr(classificationSecondCategory.indexOf("    ")+4);
//  document.getElementsByClassName('pl-products-item__link')[0].href

// var pidsPath = document.getElementsByClassName('pl-products-item__link')

// pids = pidsPath.replace(/^.*[\\\/]/, '');   

// https://www.mrporter.com/mens/search?keywords=globe   (allows search terms)
  
var imageType = "";
var subImageType = 1;  //group 2 is individual
var pidsPath = "";
var pidNo = "";
var arDefaultImageTypes = ["in","rw","fr","bk","ou","ou2","ou3","cu","e1","e2","e3","e4","e5","e6","e7","e8","sw"];
var arDefaultImageTypesFulcrum = ["ou","mp4","in"];

var arUserDefinedPIDs = [];
var arFulcrumPIDs = [];
var arFulcrumDesignerPIDs = [];
var arFulcrumProductDescriptionPIDs = [];
var arFulcrumProductNotesPIDs = [];
var arFulcrumColourPIDs = [];
var arFulcrumCategoryPIDs = [];
var arFulcrumSubcategoryPIDs = [];
var fulcrumDesigner = "";
var fulcrumProductDescription = "";
var fulcrumProductNotes = "";
var fulcrumColour = "";
var fulcrumCategory = "";
var fulcrumSubcategory = "";


if(document.getElementsByClassName('channel_logo')[0] != undefined) {
    var subSite = "fulcrum";
    
    if(document.getElementsByClassName('channel_logo')[0].alt.search('OUTNET') != -1)   {
        site = "ton";
     }
    else if(document.getElementsByClassName('channel_logo')[0].alt.search('MRP') != -1)  {
        site = "mrp";
        }
    else if(document.getElementsByClassName('channel_logo')[0].alt.search('NAP') != -1) {
        site = "nap";   
    }
}
else if(document.URL.search('net-a-porter') != -1) {
    var site = "nap";
    var imageClass = "product-image";
}
else if (document.URL.search('theoutnet') != -1) {
    var site = "ton";
    var imageClass = "product-image"
}
else if (document.URL.search('mrporter') != -1) {
    var site = "mrp";
    if (document.getElementsByClassName('pl-products-item__link').length > 1) {
        var imageClass = "pl-products-item__link";
    }
    else {
        var imageClass = "product-image";
    }    
}

if (subSite == "fulcrum") {
    clean(document.body);
    
      
    for (var l=0; l < document.getElementById('photography_worklist_details').childNodes[0].childNodes[2].childNodes.length; l++) {
    
            if (document.getElementById('photography_worklist_details').childNodes[0].childNodes[2].childNodes[l].childNodes.length > 19) {
               
               
                    
                    if (document.getElementById("image_icon_" +  document.getElementById('photography_worklist_details').childNodes[0].childNodes[2].childNodes[l].childNodes[1].childNodes[0].childNodes[1].childNodes[0].childNodes[1].textContent + "_15").src.search("film") > 0) {
                        
                        
                    
                                
                    arFulcrumPIDs.push(document.getElementById('photography_worklist_details').childNodes[0].childNodes[2].childNodes[l].childNodes[1].childNodes[0].childNodes[1].childNodes[0].childNodes[1].textContent);
                
                fulcrumDesigner = document.getElementById('photography_worklist_details').childNodes[0].childNodes[2].childNodes[l].childNodes[1].childNodes[0].childNodes[0].textContent;
                
                arFulcrumDesignerPIDs.push(fulcrumDesigner.trim());
                
                fulcrumProductDescription = document.getElementById('photography_worklist_details').childNodes[0].childNodes[2].childNodes[l].childNodes[1].childNodes[1].childNodes[0].textContent;
 
                arFulcrumProductDescriptionPIDs.push(fulcrumProductDescription.trim());
                
                fulcrumProductNotes = document.getElementById('photography_worklist_details').childNodes[0].childNodes[2].childNodes[l].childNodes[1].childNodes[2].textContent;
  
                arFulcrumProductNotesPIDs.push(fulcrumProductNotes.trim());   
                    
                fulcrumColour = document.getElementById('photography_worklist_details').childNodes[0].childNodes[2].childNodes[l].childNodes[2].childNodes[5].textContent
  
                arFulcrumColourPIDs.push(fulcrumColour.trim());  
                    
                 fulcrumCategory = document.getElementById('photography_worklist_details').childNodes[0].childNodes[2].childNodes[l].childNodes[2].childNodes[2].textContent;
  
                arFulcrumCategoryPIDs.push(fulcrumCategory.trim());  
                    
                 fulcrumSubcategory =  document.getElementById('photography_worklist_details').childNodes[0].childNodes[2].childNodes[l].childNodes[2].childNodes[0].textContent;  
  
                arFulcrumSubcategoryPIDs.push(fulcrumSubcategory.trim());      
                 }              
                   
            }        
    typeOfImages = 5;    
    }
}

else {
    
   var typeOfImages = prompt('What image would you like to view? \n1. All Images\n2. Specific Images\n3. User defined PIDs - All Images\n4. User defined PIDs - Specific Images');
if (typeOfImages == 3 || typeOfImages == 4) {
    var userDefinedPIDs = prompt('Type in as many 6 digit pids seperated by a comma as you like to view them.\n(Dont worry about removing spaces)');
} 
    
if (typeOfImages == 2 || typeOfImages == 4) {
    var typeOfImagesIndividual = prompt('What image would you like to view? \n1. IN\n2. RW\n3. FR\n4. BK\n5. OU\n6. OU2\n7. OU3\n8. CU\n9. E1\n10. E2\n11. E3\n12. E4\n13. E5\n14. E6\n15. E7\n16. E8\n17. SW');
         switch(typeOfImagesIndividual) {
            case "1":
                var imageType = "in";
                break;
            case "2":
               var imageType = "rw";
                break;
            case "3":
               var imageType = "fr";
                break;
            case "4":
              var imageType = "bk";
                break;
            case "5":
                var imageType = "ou";
                break;
            case "6":
               var imageType = "ou2";
                break;
            case "7":
               var imageType = "ou3";
                break;    
            case "8":
               var imageType = "cu";
                break;    
            case "9":
               var imageType = "e1";
                break;    
            case "10":
               var imageType = "e2";
                break;    
            case "11":
               var imageType = "e3";
                break;    
            case "12":
               var imageType = "e4";
                break;    
            case "13":
               var imageType = "e5";
                break; 
            case "14":
               var imageType = "e6";
                break; 
             case "15":
               var imageType = "e7";
                break;
             case "16":
               var imageType = "e8";    
                break;      
            case "17":
               var imageType = "sw";    
                break; 
            default:
               var imageType = "in";
        }     
}

    
}


var tableHTML = beginHTML();

    if (typeOfImages == 1) {
        for (var i = 0; i < document.getElementsByClassName(imageClass).length; i++) {

            pidNo = findPid();

            for (var a = 0; a < arDefaultImageTypes.length;a++) {
                tableCell();
            }
            
            tableHTML += "</tr>";
        }

    }

    else if (typeOfImages == 2)  {

        for (var i = 0; i < document.getElementsByClassName(imageClass).length; i++) {

            pidNo = findPid();

            if (i > 0 && i % 6 == 0) {
                tableHTML += "</tr><tr>";
            } 

            tableCell();

        }

    tableHTML += "</tr>";

    }

    else if (typeOfImages == 3) {

        userDefinedPIDs = userDefinedPIDs.replace(/\s+/g, '');
        var arUserDefinedPIDs = userDefinedPIDs.split(',');
        
        for (var i = 0; i < arUserDefinedPIDs.length; i++) {
            
          
            
            for (var a = 0; a < arDefaultImageTypes.length;a++) {

               tableCell();

            }                          
            
                
            tableHTML += "</tr>";

        }
    } 
    
    else if (typeOfImages == 4) {

        userDefinedPIDs = userDefinedPIDs.replace(/\s+/g, '');
        var arUserDefinedPIDs = userDefinedPIDs.split(',');
        
        for (var i = 0; i < arUserDefinedPIDs.length; i++) {
            
               
              if (i > 0 && i % 6 == 0) {
                tableHTML += "</tr><tr>";
            } 
              
                tableCell();
            }
                
            tableHTML += "</tr>";

     }
    

    else if (typeOfImages == 5) {   //Fulcrum


        for (var i = 0; i < arFulcrumPIDs.length; i++) {
            
            for (var a = 0; a < 3; a++) {
               tableCell();
            }
            
            if ((i+1) % 2 == 0) {
                  tableHTML += "</tr><tr><td colspan='3' style='border: 1px solid black;'>"  + arFulcrumProductDescriptionPIDs[i-1] + "</SPAN><BR><SPAN>Colour: " + arFulcrumColourPIDs[i-1] + "</SPAN></td><td colspan='3' style='border: 1px solid black;'>"  + arFulcrumProductDescriptionPIDs[i] + "</SPAN><BR><SPAN>Colour: " + arFulcrumColourPIDs[i] + "</SPAN></td></tr>"; 
            }
            
            else if ((i+1) == arFulcrumPIDs.length) {
                tableHTML += "</tr><tr><td colspan='3' style='border: 1px solid black;'>"  + arFulcrumProductDescriptionPIDs[i] + "</SPAN><BR><SPAN>Colour: " + arFulcrumColourPIDs[i] + "</SPAN></td></tr>"; 
            }
        }
  }
       
    


tableHTML += "</table>";

    
var x = window.open();
x.document.open();
x.document.write(tableHTML);
x.document.close();

    
function tableCell() {
    if (typeOfImages == 1) {
        tableHTML += "<td class='columns' style='background-color: lightgrey;'><IMG SRC='" + imageFileLocation() + "'><BR>";
        if (site == "mrp") {
            tableHTML += pidNo + "_" + site + "_" + arDefaultImageTypes[a] + "</td>";
        }
        else {
            tableHTML += pidNo + "_" + arDefaultImageTypes[a] + "</td>";
        }
    }        
    else if (typeOfImages == 2) {
        tableHTML += "<td class='columns' style='background-color: lightgrey;'><IMG SRC='" + imageFileLocation() + "'><BR>"; 
        if (site == "mrp") {
            tableHTML += pidNo + "_" + site + "_" + imageType + "</td>";
        }
        else {
            tableHTML += pidNo + "_" + imageType + "</td>";
        } 
    }
    else if (typeOfImages == 3 || typeOfImages == 4) {
        tableHTML += "<td class='columns' style='background-color: lightgrey;'><IMG SRC='" + imageFileLocation() + "'><BR>";
        if (site == "mrp") {
            if (typeOfImages != 4) {
                tableHTML += arUserDefinedPIDs[i] + "_" + site + "_" + arDefaultImageTypes[a] + "</td>";
            }
            else {
                tableHTML += arUserDefinedPIDs[i] + "_" + site + "_" + imageType + "</td>";
            }
        }
        else {
            if (typeOfImages != 4) {
                tableHTML += arUserDefinedPIDs[i] + "_" + arDefaultImageTypes[a] + "</td>";
            }
            else {
                tableHTML += arUserDefinedPIDs[i] + "_" + imageType + "</td>";
            }
        } 
    }
     else if (typeOfImages == 5) {
        if (a == 1) {
             if (site == "mrp") {
             
             tableHTML +=  "<td class='columns' style='background-color: lightgrey;'><video id='my-video' class='video-js' preload='auto' data-setup='{}' width='464px'  height='475px'><source type='video/mp4' src='https://video.mrporter.com/videos/productPage/" + arFulcrumPIDs[i] + "_detail.mp4#t=03'></video><BR>" + arFulcrumPIDs[i] + "_" + arDefaultImageTypesFulcrum[a] + "</td>";
         }
            else if (site == "nap"){
             tableHTML +=  "<td class='columns' style='background-color: lightgrey;'><video id='my-video' class='video-js' preload='auto' data-setup='{}' height='390px'  width='370px'><source type='video/mp4' src='https://video.net-a-porter.com/videos/productPage/" + arFulcrumPIDs[i] + "_detail.mp4#t=05'></video><BR>" + arFulcrumPIDs[i] + "_" + arDefaultImageTypesFulcrum[a] + "</td>";
         }
         }
              
        else {
         tableHTML += "<td class='columns' style='background-color: lightgrey;'><IMG SRC='" + imageFileLocation() + "' width='464px' height='475px'><BR>";
        if (site == "mrp") {
            tableHTML += arFulcrumPIDs[i] + "_" + site + "_" + arDefaultImageTypesFulcrum[a] + "</td>";
        }
        else {
            tableHTML += arFulcrumPIDs[i] + "_" + arDefaultImageTypesFulcrum[a] + "</td>";
        } 
        }
    }
    
    
}

function beginHTML() {
    console.log("test")
    if (subSite == "fulcrum") {
         return "<html><head><link href='http://vjs.zencdn.net/5.8.8/video-js.css' rel='stylesheet'><script src='http://vjs.zencdn.net/5.8.8/video.js'></script><!-- If you'd like to support IE8 --><script src='http://vjs.zencdn.net/ie8/1.1.2/videojs-ie8.min.js'></script></head><body><table class='tg' style='text-align: center; font-family: Georgia; border: 1px solid black;'><tr><th class='header'>Video</th><th class='header'>OU</th><th class='header'>IN</th><th class='header'>Video</th><th class='header'>OU</th><th class='header'>IN</th></tr><tr>";
    }
    else if (typeOfImages == 1 || typeOfImages == 3 || typeOfImages ==5) {
        return "<table class='tg' style='text-align: center; font-size: 300%; font-family: Georgia; border: 1px solid black;'><tr><th class='header'>IN</th><th class='header'>RW</th><th class='header'>FR</th><th class='header'>BK</th><th class='header'>OU</th><th class='header'>OU2</th><th class='header'>OU3</th><th class='header'>CU</th><th class='header'>E1</th><th class='header'>E2</th><th class='header'>E3</th><th class='header'>E4</th><th class='header'>E5</th><th class='header'>E6</th><th class='header'>E7</th><th class='header'>E8</th><th class='header'>SW</th></tr><tr>";
    }
    else {
            return "<table class='tg' style='text-align: center; font-size: 300%; font-family: Georgia; border: 1px solid black;'><tr>";    

        }
    
}

function findPid() {
    if (site == "ton") {     
        var pidsPath = document.getElementsByClassName('list-item')[i].href;
        var pidsFull = pidsPath.replace(/^.*[\\\/]/, '');   
        return pidsFull.slice(0,6);         
    }
    if (site == "mrp") {
        if (document.getElementsByClassName('pl-products-item__link').length > 1) {
            var pidsPath = document.getElementsByClassName(imageClass)[i].href; 
        }
        else {
            var pidsPath = document.getElementsByClassName(imageClass)[i].childNodes[1].childNodes[1].src;
        }
           
        var pidsFull = pidsPath.replace(/^.*[\\\/]/, '');         
        return pidsFull.slice(0,6);
        
    }
    if (site == "nap") {
       
        var pidsPath = document.getElementsByClassName(imageClass)[i].childNodes[1].pathname;
       
        if (pidsPath.slice(0,8) == '/product') {
            var pidsFull = pidsPath.replace('/product/', '');    
            
        }
        else {
            var pathArray = window.location.pathname.split( '/' );
            var pidsFull = pidsPath.replace("/" + pathArray[1] + "/" + pathArray[2] + "/product/", '');
        }

        return pidsFull.slice(0,6);
        
    }
    
}

function imageFileLocation() {
    
     if (a == 17) {
         return "http://fulcrum.net-a-porter.com/static/images/product/" + arFulcrumPIDs[i] + "/" + "100.jpg?" + escape(new Date());
     }
     else if (a == 18) {
          return "http://fulcrum.net-a-porter.com/static/images/product/" + arFulcrumPIDs[i] + "/" + "200.jpg?" + escape(new Date());
     }
     else if (a == 19) {
         return "http://fulcrum.net-a-porter.com/static/images/product/" + arFulcrumPIDs[i] + "/" + "300.jpg?" + escape(new Date());
     }
    
    else if (site == "ton") {   //ton
        if (typeOfImages == 1) {
             return "https://cache.theoutnet.com/images/products/" + pidNo + "/" + pidNo + "_" + arDefaultImageTypes[a] + "_pp.jpg?" + escape(new Date());
        }
        else if (typeOfImages == 2) {
            return "https://cache.theoutnet.com/images/products/" + pidNo + "/" + pidNo + "_" + imageType + "_pp.jpg?" + escape(new Date());
        }    
         else if (typeOfImages == 3) {
             return "https://cache.theoutnet.com/images/products/" + arUserDefinedPIDs[i] + "/" + arUserDefinedPIDs[i] + "_" + arDefaultImageTypes[a] + "_pp.jpg?" + escape(new Date());
        }
        else if (typeOfImages == 4) {
             return "https://cache.theoutnet.com/images/products/" + arUserDefinedPIDs[i] + "/" + arUserDefinedPIDs[i] + "_" + imageType + "_pp.jpg?" + escape(new Date());
        }
         else if (typeOfImages == 5) {
             return "https://cache.theoutnet.com/images/products/" + arFulcrumPIDs[i] + "/" + arFulcrumPIDs[i] + "_" + arDefaultImageTypesFulcrum[a] + "_pp.jpg?" + escape(new Date());
        }
        
    }
        
    else if (site == "mrp") {  //mrP
         if (typeOfImages == 1) {
             return "https://cache.mrporter.com/images/products/" + pidNo + "/" + pidNo + "_" + "mrp" + "_" + arDefaultImageTypes[a] + "_xl.jpg?" + escape(new Date());
        }
        else if (typeOfImages == 2) {
           return "https://cache.mrporter.com/images/products/" + pidNo + "/" + pidNo + "_" + "mrp" + "_" + imageType + "_xl.jpg?" + escape(new Date());
        }    
         else if (typeOfImages == 3) {
            return "https://cache.mrporter.com/images/products/" + arUserDefinedPIDs[i] + "/" + arUserDefinedPIDs[i] + "_" + "mrp" + "_" + arDefaultImageTypes[a] + "_xl.jpg?" + escape(new Date()); 
        }
         else if (typeOfImages == 4) {
            return "https://cache.mrporter.com/images/products/" + arUserDefinedPIDs[i] + "/" + arUserDefinedPIDs[i] + "_" + "mrp" + "_" + imageType + "_xl.jpg?" + escape(new Date()); 
        }
        else if (typeOfImages == 5) {
            return "https://cache.mrporter.com/images/products/" + arFulcrumPIDs[i] + "/" + arFulcrumPIDs[i] + "_" + "mrp" + "_" + arDefaultImageTypesFulcrum[a] + "_xl.jpg?" + escape(new Date()); 
        }
        
    }
    else if (site == "nap") {    //nap
         if (typeOfImages == 1) {
             return "https://cache.net-a-porter.com/images/products/" + pidNo + "/" + pidNo + "_" + arDefaultImageTypes[a] + "_pp.jpg?" + escape(new Date());
        }
        else if (typeOfImages == 2) {
            return "https://cache.net-a-porter.com/images/products/" + pidNo + "/" + pidNo + "_" + imageType + "_pp.jpg?" + escape(new Date());
        }    
         else if (typeOfImages == 3) {
             return "https://cache.net-a-porter.com/images/products/" + arUserDefinedPIDs[i] + "/" + arUserDefinedPIDs[i] + "_" + arDefaultImageTypes[a] + "_pp.jpg?" + escape(new Date());
        }
        else if (typeOfImages == 4) {
             return "https://cache.net-a-porter.com/images/products/" + arUserDefinedPIDs[i] + "/" + arUserDefinedPIDs[i] + "_" + imageType + "_pp.jpg?" + escape(new Date());
        }
         else if (typeOfImages == 5) {
             return "https://cache.net-a-porter.com/images/products/" + arFulcrumPIDs[i] + "/" + arFulcrumPIDs[i] + "_" + arDefaultImageTypesFulcrum[a] + "_pp.jpg?" + escape(new Date());
        }
    }
    
}


function clean(node)
{
  for(var n = 0; n < node.childNodes.length; n ++)
  {
    var child = node.childNodes[n];
    if
    (
      child.nodeType === 8 
      || 
      (child.nodeType === 3 && !/\S/.test(child.nodeValue))
    )
    {
      node.removeChild(child);
      n --;
    }
    else if(child.nodeType === 1)
    {
      clean(child);
    }
  }
}




// window.MRP_PL.state.listing.metadata.categories  Could you cycle through categories? Although this array is a dead end.

// window.MRP_PL.state.listing.products.items[1].leafCategoryIds[0]  Use to get category? Could lead to the Rollover.
