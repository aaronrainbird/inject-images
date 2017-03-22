//  classificationSecondCategory = classificationSecondCategory.substr(classificationSecondCategory.indexOf("    ")+4);
//  document.getElementsByClassName('pl-products-item__link')[0].href

// var pidsPath = document.getElementsByClassName('pl-products-item__link')

// pids = pidsPath.replace(/^.*[\\\/]/, '');   

// https://www.mrporter.com/mens/search?keywords=globe   (allows search terms)
  
var imageType = "";
var subImageType = 1;  //group 2 is individual
var pidsPath = "";

var arImageTypes = ["in","rw","fr","bk","ou","ou2","ou3","cu","e1","e2","e3","e4","e5","e6","e7","e8","sw"];
var site = "";
var subSite = "";
var imageClass = "";  
var typeOfImages = 0;
var filename = "";
var arPIDs = [];
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
var userDefinedPIDs = "";

var napImageWidth = 390;
var napImageHeight = 585;
var mrpImageWidth = 464;
var mrpImageHeight = 475;
var tonImageWidth = 464;
var tonImageHeight = 475;

var tableHTML = "<html><body><table class='tg' style='text-align: center; font-size: 300%; font-family: Georgia; border: 1px solid black;'><tr><th class='header'>IN</th><th class='header'>RW</th><th class='header'>FR</th><th class='header'>BK</th><th class='header'>OU</th><th class='header'>OU2</th><th class='header'>OU3</th><th class='header'>CU</th><th class='header'>E1</th><th class='header'>E2</th><th class='header'>E3</th><th class='header'>E4</th><th class='header'>E5</th><th class='header'>E6</th><th class='header'>E7</th><th class='header'>E8</th><th class='header'>SW</th></tr><tr>"

defineChoices();

    if (subSite == "fulcrum") {   //Fulcrum
        for (var i = 0; i < arPIDs.length; i++) {
            for (var a = 0; a < 3; a++) {
               tableCell();
            }
           tableHTML += "</tr><tr><td colspan='3' style='border: 1px solid black;'>"  + arFulcrumProductDescriptionPIDs[i] + "</SPAN><BR><SPAN>Colour: " + arFulcrumColourPIDs[i] + "</SPAN></td></tr>"; 
        }
    }

    else {        // Don't use descriptions.
        for (var i = 0; i < arPIDs.length; i++) {

            for (var a = 0; a < arImageTypes.length;a++) {
                tableCell();
            }
            
            tableHTML += "</tr>";    // Put more info in here later if appropriate.
        }

    }

tableHTML += "</table>";

    
var x = window.open();
x.document.open();
x.document.write(tableHTML);
x.document.close();


function defineChoices() {
    
    if(document.getElementsByClassName('channel_logo')[0] != undefined) {
        subSite = "fulcrum";

      getFulcrumInfo();

    if(document.getElementsByClassName('channel_logo')[0].alt.search('MRP') != -1)  {
          site = "MrP";      
        }
        else if(document.getElementsByClassName('channel_logo')[0].alt.search('NAP') != -1) {
          site = "NAP";   
        }
        else if(document.getElementsByClassName('channel_logo')[0].alt.search('TON') != -1) {
          site = "TON";   
        }
    }
    else if (document.URL.search('net-a-porter') != -1) {
        site = "NAP";
        imageClass = "product-image";
    }

    else if (document.URL.search('mrporter') != -1) {
        site = "MrP";
        if (document.getElementsByClassName('pl-products-item__link').length > 1) {
            imageClass = "pl-products-item__link";
        }
        else {
            imageClass = "product-image";
        }    
    }
    
     else if (document.URL.search('outnet') != -1) {
        site = "TON";
        imageClass = "product-image";     
    }
    
   if (site != "NAP" && site != "MrP" && site !="TON") {
            var siteChoice = prompt("You don't appear to be on any of the YNAP group sites. Which site would you like to search? Choose 1,2 or 3. \n1. NAP \n2. MrP \n3. TON");
            if (siteChoice == 1) {
                site = "NAP";
            }
            else if (siteChoice ==2) {
                site = "MrP";
            }
            else if (siteChoice == 3) {
                site = "TON";
            }
            
        typeOfImages = prompt('What images would you like to view on ' + site + '? \n3. User Defined PIDs - All Images \n4. User Defined PIDs - Selected Image Type');
        
        userDefinedPIDs = prompt('Type multiple 6 digit PIDs below to search them on the ' + site + ' site.\n(Dont worry about removing spaces)');
        arPIDs = userDefinedPIDs.split(/[ ,]+/).filter(Boolean);
    }
 
    else {
        
   typeOfImages = prompt('What images would you like to view on ' + site + '? \n1. On Page - All Images\n2. On Page - Selected Image Type\n3. User Defined PIDs - All Images \n4. User Defined PIDs - Selected Image Type');
    
        findPid();
        
            if (typeOfImages % 2 == 0) {
                imageType = prompt('What image would you like to view? \n1. IN\n2. RW\n3. FR\n4. BK\n5. OU\n6. OU2\n7. OU3\n8. CU\n9. E1\n10. E2\n11. E3\n12. E4\n13. E5\n14. E6\n15. E7\n16. E8\n17. SW');
                imageType--;
            }
            
            if (typeOfImages > 2 && arPIDs.length > 0) {
                var includePIDs = prompt('There are PIDs on this page, want to include those?\n1. Yes\n2. No');
                if (includePIDs == 1) {
                    userDefinedPIDs = prompt('Type multiple 6 digit PIDs below to search them on the ' + site + ' site.\n(Dont worry about removing spaces)',arPIDs.join(','));
                    arPIDs = userDefinedPIDs.split(/[ ,]+/).filter(Boolean);
                }
                else {
                userDefinedPIDs = prompt('Type multiple 6 digit PIDs below to search them on the ' + site + ' site.\n(Dont worry about removing spaces)');
                arPIDs = userDefinedPIDs.split(/[ ,]+/).filter(Boolean);
               }
            } 
                 
        }
    
 }



function tableCell() {
       if (a == 1) {   // 2nd cell is video cell.
         if (site == "MrP") {
             
             tableHTML +=  "<td class='columns' style='background-color: lightgrey;'><video id='my-video' class='video-js' preload='auto' data-setup='{}' width='" + mrpVideoWidth + "px'  height='" + mrpVideoHeight + "px'><source type='video/mp4' src='https://video.mrporter.com/videos/productPage/" + arPIDs[i] + "_detail.mp4#t=03'></video><BR>" + arPIDs[i] + "_" + arImageTypes[a] + "</td>";
         }
            else if (site == "NAP"){
             tableHTML +=  "<td class='columns' style='background-color: lightgrey;'><video id='my-video' class='video-js' preload='auto' data-setup='{}' height='" + napImageHeight + "px'  width='" + napVideoWidth + "px'><source type='video/mp4' src='https://video.net-a-porter.com/videos/productPage/" + arPIDs[i] + "_detail.mp4#t=05'></video><BR>" + arPIDs[i] + "_" + arImageTypes[a] + "</td>";
         }
        }
              
        else {
         
        if (site == "MrP") {
            tableHTML += "<td class='columns' style='background-color: lightgrey;'><IMG SRC='" + imageFileLocation() + "' width='" + mrpImageWidth + "px' height='" + mrpImageWidth + "px'><BR>";
          
        }
        else if (site == "NAP") {
            tableHTML += "<td class='columns' style='background-color: lightgrey;'><IMG SRC='" + imageFileLocation() + "' width='" + napImageWidth + "px' height='" + napImageHeight + "x'><BR>";
            
        } 
        else if (site == "TON") {
            tableHTML += "<td class='columns' style='background-color: lightgrey;'><IMG SRC='" + imageFileLocation() + "' width='" + tonImageWidth + "px' height='" + tonImageHeight + "x'><BR>";
        }
            
        
            tableHTML += filename + "</td>";
        }
}

function imageFileLocation() {
    
   if (site == "MrP") {  //MrP
        filename = arPIDs[i] + "_mrp_" + arImageTypes[a];
       if (typeOfImages == 2) {
           return "https://cache.mrporter.com/images/products/" + arPIDs[i] + "/" + arPIDs[i] + "_" + "mrp" + "_" + arImageTypes[a] + "_xl.jpg?" + escape(new Date()); 
        }    
        else {
             return "https://cache.mrporter.com/images/products/" + arPIDs[i] + "/" + arPIDs[i] + "_mrp_" + arImageTypes[a] + "_xl.jpg?" + escape(new Date());
        }         
    }
    else if (site == "NAP") {    //NAP
        filename = arPIDs[i] + "_" + arImageTypes[a];
        if (typeOfImages == 2) {
            return "https://cache.net-a-porter.com/images/products/" + arPIDs[i] + "/" + arPIDs[i] + "_" + arImageTypes[a] + "_pp.jpg?" + escape(new Date());
        }  
        
        else {
             return "https://cache.net-a-porter.com/images/products/" + arPIDs[i] + "/" + arPIDs[i] + "_" + arImageTypes[a] + "_pp.jpg?" + escape(new Date());
        }
          
    }
    
}


function findPid() {
   
    for (var i = 0; i < document.getElementsByClassName(imageClass).length; i++) {
        
        if (site == "MrP") {
            if (document.getElementsByClassName('pl-products-item__link').length > 1) {
                var pidsPath = document.getElementsByClassName(imageClass)[i].href; 
            }
            else {
                var pidsPath = document.getElementsByClassName(imageClass)[i].childNodes[1].childNodes[1].src;
            }

            var pidsFull = pidsPath.replace(/^.*[\\\/]/, '');         
            arPIDs.push(pidsFull.slice(0,6));

        }
        if (site == "NAP") {

            var pidsPath = document.getElementsByClassName(imageClass)[i].childNodes[1].pathname;

            if (pidsPath.slice(0,8) == '/product') {
                var pidsFull = pidsPath.replace('/product/', '');    

            }
            else {
                var pathArray = window.location.pathname.split( '/' );
                var pidsFull = pidsPath.replace("/" + pathArray[1] + "/" + pathArray[2] + "/product/", '');
            }

            arPIDs.push(pidsFull.slice(0,6));

        }
    }
}



function getFulcrumInfo() {
    
        clean(document.body);
          
    for (var l=0; l < document.getElementById('photography_worklist_details').childNodes[0].childNodes[2].childNodes.length; l++) {
    
            if (document.getElementById('photography_worklist_details').childNodes[0].childNodes[2].childNodes[l].childNodes.length > 19) {
               
                                   
                    if (document.getElementById("image_icon_" +  document.getElementById('photography_worklist_details').childNodes[0].childNodes[2].childNodes[l].childNodes[1].childNodes[0].childNodes[1].childNodes[0].childNodes[1].textContent + "_15").src.search("film") > 0) {
                            
                    arPIDs.push(document.getElementById('photography_worklist_details').childNodes[0].childNodes[2].childNodes[l].childNodes[1].childNodes[0].childNodes[1].childNodes[0].childNodes[1].textContent);
                
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
