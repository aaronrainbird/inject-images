//  classificationSecondCategory = classificationSecondCategory.substr(classificationSecondCategory.indexOf("    ")+4);
//  document.getElementsByClassName('pl-products-item__link')[0].href

// var pidsPath = document.getElementsByClassName('pl-products-item__link')

// pids = pidsPath.replace(/^.*[\\\/]/, '');   

// https://www.mrporter.com/mens/search?keywords=globe   (allows search terms)
  
var imageType = "";
var subImageType = 1;  //group 2 is individual
var pidsPath = "";

var arImageTypes = ["ou","mp4","in"];
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
var napVideoWidth = 399.19;
var napVideoHeight = 421.7;
var mrpImageWidth = 464;
var mrpImageHeight = 475;
var mrpVideoWidth = 464;
var mrpVideoHeight = 475;

var tableHTML = "<html><head><link href='http://vjs.zencdn.net/5.8.8/video-js.css' rel='stylesheet'><script src='http://vjs.zencdn.net/5.8.8/video.js'></script><!-- If you'd like to support IE8 --><script src='http://vjs.zencdn.net/ie8/1.1.2/videojs-ie8.min.js'></script></head><body><table class='tg' style='text-align: center; font-family: Georgia; border: 1px solid black;'><tr><th class='header'>OU</th><th class='header'>Video</th><th class='header'>IN</th><th class='header'>OU</th><th class='header'>Video</th><th class='header'>IN</th></tr><tr>"


defineChoices();

    if (subSite == "fulcrum") {   //Fulcrum


        for (var i = 0; i < arPIDs.length; i++) {
            
            for (var a = 0; a < 3; a++) {
               tableCell();
            }
            
            if ((i+1) % 2 == 0) {
                  tableHTML += "</tr><tr><td colspan='3' style='border: 1px solid black;'>"  + arFulcrumProductDescriptionPIDs[i-1] + "</SPAN><BR><SPAN>Colour: " + arFulcrumColourPIDs[i-1] + "</SPAN></td><td colspan='3' style='border: 1px solid black;'>"  + arFulcrumProductDescriptionPIDs[i] + "</SPAN><BR><SPAN>Colour: " + arFulcrumColourPIDs[i] + "</SPAN></td></tr>"; 
            }
            
            else if ((i+1) == arPIDs.length) {
                tableHTML += "</tr><tr><td colspan='3' style='border: 1px solid black;'>"  + arFulcrumProductDescriptionPIDs[i] + "</SPAN><BR><SPAN>Colour: " + arFulcrumColourPIDs[i] + "</SPAN></td></tr>"; 
            }
        }
    }

    else {        // Get Pid No's from page
        for (var i = 0; i < arPIDs.length; i++) {

            for (var a = 0; a < arImageTypes.length;a++) {
                tableCell();
            }
            
            if ((i+1) % 2 == 0) {
                tableHTML += "</tr>";    // Put more info in here later if appropriate.
            }
        }

    }


tableHTML += "</table>";

    
var x = window.open();
x.document.open();
x.document.write(tableHTML);
x.document.close();



function tableCell() {
       if (a == 1) {
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
        else {
            tableHTML += "<td class='columns' style='background-color: lightgrey;'><IMG SRC='" + imageFileLocation() + "' width='" + napImageWidth + "px' height='" + napImageHeight + "x'><BR>";
            
        } 
            tableHTML += filename + "</td>";
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
    
    if (subSite != "fulcrum") {

        if (site != "NAP" && site != "MrP") {
            var siteChoice = prompt("You don't appear to be on any of the YNAP group sites. Which site would you like to search? Choose 1 or 2. \n1. NAP \n2. MrP");
            if (siteChoice == 1) {
                site = "NAP";
            }
        else {
            site = "MrP";
        }
            
        typeOfImages = 2
        userDefinedPIDs = prompt('Type multiple 6 digit PIDs below to search them on the ' + site + ' site.\n(Dont worry about removing spaces)');
        userDefinedPIDs = userDefinedPIDs.replace(/\s+/g, '');
        arPIDs = userDefinedPIDs.split(',');
          
    }
 
    else {
    
   typeOfImages = prompt('What images would you like to view on the ' + site + ' site? \n1. All images on Page\n2. User defined PIDs');
    
        findPid();
        
            if (typeOfImages == 2) {
                var includePIDs = prompt('Theres PIDs on this page, want to include those?\n1. Yes\n2. No');
                if (includePIDs == 1) {
                    userDefinedPIDs = prompt('Type multiple 6 digit PIDs below to search them on the ' + site + ' site.\n(Dont worry about removing spaces)',arPIDs.join(','));
                }
                else {
                userDefinedPIDs = prompt('Type multiple 6 digit PIDs below to search them on the ' + site + ' site.\n(Dont worry about removing spaces)');
                userDefinedPIDs = userDefinedPIDs.replace(/\s+/g, '');
                arPIDs = userDefinedPIDs.split(',');
                }
            } 
                 
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
