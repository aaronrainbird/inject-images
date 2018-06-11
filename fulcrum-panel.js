/*


DO A CELL COUNT FOR YOUR NAME IN PHOTOGRAPHER AND RETOUCHER CELLS.  HIGHER TOTAL IN ONE WOULD DEFINE YOU AS A RETOUCHER OR A PHOTOGRAPHER.

    // *************************   To Implement  ***********************************




    Checking if images exist.  This can easily refer to a function. When you're cycling through the cells, just search for the image in each cell no.

    function imageExistCheck(title,shotType) {
    var localImageLocation = ("http://cache.mrporter.com/images/products/" + title + "/" + title + "_mrp_" + shotType + "_m2.jpg");

    Needs to do a push request on that image location and check if it exists.  If not do nothing for now.  If does exist add it to the array.

    arImageExistCheck.push(localImageLocation);
    }


    // Also a get image request that looks for images that aren't listed in the cells.  If any results come back the images may have to be deleted by service desk, otherwise they will appear on the website.


    // This function will work on testing imageUrls.  The aim will be to implement it into checks.



    
/**********************************************************************    
*************************   START  ************************************
***********************************************************************/

window.scrollTo(0, 0);


if (null != staffSummaryAdmin) {
    showAllPIDs();
    $('#staffSummaryOptions').remove();
    $('#staffSummaryIndividual').remove();
    $('#staffSummaryAdmin').remove();
    $('#retouchSummaryInfo').remove();

} 


    // Get list of Pids/Rows
    var rows = document.getElementsByTagName("tr");

    var pidRows = document.getElementsByClassName("pid_rows");
    var labelRows = document.getElementsByClassName("label_rows");
 
    var filterButtons = document.getElementsByClassName('filterButton');

    // Get information about the images
    var pidListTitle = document.getElementsByTagName('h3')[0].innerText;

    
    // What list is it
    var brandList = document.getElementsByClassName('channel_logo')[0].alt;
    
    if (brandList.search("MRP") >= 0) {
        brandList = "Mr Porter";
    } else if (brandList.search("TON") >= 0) {
        brandList = "The Outnet";
    } else {
        brandList = "Net A Porter";
    }
        

    // Get Retoucher Name
    var myName = document.getElementById('user_status').childNodes[1].innerText;
   


    // This code is for adding up the section values.

    var globalImageCount = 0;
    var pidFinishCount = 0;             // Whether a PID has been retouched
    var pidFinishCountStrict = 0;       // Stricter count!
    
    // FINISHED IMAGES

    var globalImagesRetouched = 0;      // Subtotal
    
    var approved = 0;
    var readyForApproval = 0;
    var uploaded = 0;

    // IMAGES TO BE RETOUCHED

    var globalImagesToBeRetouched = 0;     // Subtotal

    var needsAmend = 0;
    var needsColourMatching = 0;
    var beingRetouched = 0;
    var needsRechecking = 0;
    var shotTaken = 0;

    // IMAGES MISSING

    var globalProblemImages = 0;            // Subtotal
    
    var needsReshoot = 0;
    var fileMissing = 0;

    // IMAGE CELL NOT IN USE

    var blankCells = 0;             // Don't need this yet
    var deleteCell = 0;

    // IN CASE I'VE MISSED A CATEGORY

    var unlistedCategory = 0;

    // ARRAYS FOR STORING THINGS

    var arAmendPids = [];
    var arUnfinishedPids = [];
    var arUnshotPids = [];

    var arNeedsReshoot = [];
    var arFileMissing = [];
    var arSampleMissing = [];
    var arPriorityPIDs = [];
    var arMergePIDs = [];
    var arRetouchers = [];
    var arPhotographers = [];
    var arRetoucherImageCount = [];
    var arProductCategories = [];
    var arRetouchersUnique = [];
    var arPhotographersUnique = [];
    
    // Retoucher Version
    
    var globalImageCountRetoucher = 0;

    // FINISHED IMAGES

    var pidFinishCountRetoucher = 0;             // Whether a PID has been retouched
    var pidFinishCountStrictRetoucher = 0;       // Stricter count!

    var globalImagesRetouchedRetoucher = 0;
    var approvedRetoucher = 0;
    var readyForApprovalRetoucher = 0;
    var uploadedRetoucher = 0;

    // IMAGES TO BE RETOUCHED

    var globalImagesToBeRetouchedRetoucher = 0;

    var needsAmendRetoucher = 0;
    var needsColourMatchingRetoucher = 0;
    var beingRetouchedRetoucher = 0;
    var needsRecheckingRetoucher = 0;
    var shotTakenRetoucher = 0;

    // IMAGES MISSING

    var notShotRetoucher = 0;            // Nothing being done with this yet.

    var globalProblemImagesRetoucher = 0;
    var needsReshootRetoucher = 0;
    var fileMissingRetoucher = 0;

    // IMAGE CELL NOT IN USE

    var blankCellsRetoucher = 0;             // Don't need this yet
    var deleteCellRetoucher = 0;

    // IN CASE I'VE MISSED A CATEGORY

    var unlistedCategoryRetoucher = 0;
    
    var retouchersListText = "";
    var photographersListText = "";
    var retoucherNumber = "";
    var photographerNumber = "";

/****************************************************************************************************************************************************       
*************************   NAME ROWS SO THEY CAN BE USED EASIER LATER ON.  Names are TR pid_rows and label_rows ************************************
*****************************************************************************************************************************************************/
    
    var listOfPids = document.getElementsByClassName('piditem');

    for (var i = 0; i < rows.length; ++i) {                    
            rows[i].style.visibility = "visible";
                
                
                if (i>6) {
                    if ((i-4) % 6 == 0 ) {
                        rows[i].setAttribute("class","label_rows");
                    }
                    }
            if (i>=5) {
            if (rows[i].className != "label_rows") {
            rows[i].setAttribute("class","pid_rows")
            }
            }
        }
    
/****************************************************************************************************************************************************       
*************************   WORK OUT WHETHER IT'S A RETOUCHER OR A PHOTOGRAPHER*********************************************************************
*****************************************************************************************************************************************************/    
    
    
    var retouchNameCount = 0;
    var photogNameCount = 0;
    
     for (var i = 0; i < listOfPids.length; ++i) {
         var pidNo = listOfPids[i].innerText;
         
         for (var n = 1; n < 13;n++) {
              
              var retouchName = document.getElementById("retoucher_label_" + pidNo + "_" + n).title;
              var photogName = document.getElementById("photographer_label_" + pidNo + "_" + n).title
              var retouchNameCut = retouchName.substr(retouchName.indexOf(": ") + 2);
              var photogNameCut = photogName.substr(photogName.indexOf(": ") + 2);
            
             if (myName == retouchNameCut) {
                retouchNameCount++;
              }
             else if (myName == photogNameCut) {
                 photogNameCount++;
             }
             else {
       
             }
         }
         
     }
    
    
/****************************************************************************************************************************************************       
*************************   CREATE A RETOUCHER AND PHOTOGRAPHER ARRAY.  IF LIST APPROVER ALLOW THEM TO VIEW A RETOUCHER/PHOTOGRAPHER STATS***********
*****************************************************************************************************************************************************/        
    
    
        getAllNames();
    

    
    for (var i=0;i < arRetouchersUnique.length;i++)
        {
             retouchersListText += ("[" + i + "] - " + arRetouchersUnique[i] + "\n");   
        }
    
     for (var i=0;i < arPhotographersUnique.length;i++)
        {
             photographersListText += ("[" + i + "] - " + arPhotographersUnique[i] + "\n");   
        }
    
    var myRole = (retouchNameCount >= photogNameCount) ? "retoucher" : "photographer";
    
    if (myName == "Aaron Rainbird" || myName == "Amy Drewitt" || myName == "Tom Lowther" || myName == "John Zampetti" || myName == "Tom Bradfield" || myName == "Gareth Durant" || myName == "Faye Sampson" ||  myName == "James Allum" || myName == "Constantin Cerdan" || myName == "Lewis Clark" || myName == "Jonathan Pearson") {
       retoucherNumber = prompt("You're on the list of Retouch List Approvers, so you can see another retoucher's stats.  Just type the number you want and choose ok." + "\n\n" + retouchersListText + "\n [p] Switch to photographer's list.");
 
        
        if (retoucherNumber == "p") {
             photographerNumber = prompt("You've chosen to see the photographer's stats.  Just type the number you want and choose ok." + "\n\n" + photographersListText);
             if (photographerNumber != null) {
                 myName = arPhotographersUnique[photographerNumber];
                 myRole = "photographer";
             }
         }
        
         else if (retoucherNumber != null) {
          myName = arRetouchersUnique[retoucherNumber];
             myRole = "retoucher";
         }
        
        else {
           myName = document.getElementById('user_status').childNodes[1].innerText;
             myRole = "retoucher";
            
        }
    }

  
    if (myName == "Ben Cannon" || myName == "Nick Maroudias" || myName == "Stacey Hatfield" || myName == "Jennifer Webb") {
       photographerNumber = prompt("You're on the list of Photography List Approvers, so you can see another photographer's stats.  Just type the number you want and choose ok." + "\n\n" + photographersListText + "\n [r] Switch to retoucher's list.");
       
         if (photographerNumber == "r") {
             retoucherNumber = prompt("You've chosen to see the retoucher's stats.  Just type the number you want and choose ok." + "\n\n" + retouchersListText);
             if (retoucherNumber != null) {
                 myName = arRetouchersUnique[retoucherNumber];    
                 myRole = "retoucher";
             }
        }
         else if (photographerNumber != null) {
             myRole = "photographer";
             myName = arPhotographersUnique[photographerNumber];
         }
        else {
            myName = document.getElementById('user_status').childNodes[1].innerText;
            myRole = "photographer";
        } 
    }
    

 if (myName == undefined) {
     myName = document.getElementById('user_status').childNodes[1].innerText;
 }


/*    
    var select = document.getElementById('user_status').childNodes[1];
    document.getElementById('user_status').childNodes[1] = "";
    
    
    
for(var i = 0; i < arRetouchersUnique.length; i++) {
    var opt = arRetouchersUnique[i];
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    select.appendChild(el);
}
  */
  
/****************************************************************************************************************************************************       
*************************  MAIN CYCLE THROUGH THE PIDS FUNCTION FOR GETTING INFO ABOUT THE PIDS *****************************************************
*****************************************************************************************************************************************************/      
    
    
    for (var i = 0; i < listOfPids.length; ++i)         // Goes through the rows.
        {
            var pidNo = listOfPids[i].innerText;         // Gets the Pid No.

            // INFO ABOUT THE PID

            var designerTextFull = document.getElementsByClassName('designer')[i].innerText;
            var designerTextCut = designerTextFull.split('PID')[0]; 
            var productNameText = document.getElementsByClassName('product_name')[i].innerText;
            var productDescriptionText = document.getElementsByClassName('product_description')[i].innerText;
            var productDetails = document.getElementsByClassName('product_details')[i].innerText;
            
            var prioritySearch = productDetails.search("Priority");
            var mergeSearch = productDetails.search("merge");
            
            var classificationFirstCategory = document.getElementsByClassName('classification')[i].childNodes[3].innerText;
            var classificationSecondCategory = document.getElementsByClassName('classification')[i].childNodes[0].data;
            classificationSecondCategory = classificationSecondCategory.substr(classificationSecondCategory.indexOf("    ")+4);
            classificationSecondCategory = classificationSecondCategory.replace("    ","");
            arProductCategories.push(classificationFirstCategory + " - " + classificationSecondCategory);
            
            flushLocalValues()
            
        //    var shotType="in";
            for (var n = 1; n < 13;n++)     // Goes through the columns.
                {   
                   
                   var localName = document.getElementById(myRole + "_label_" + pidNo + "_" + n).title;     // Gets the retoucher name for PID Focus. 
                    var localNameCut = localName.substr(localName.indexOf(": ") + 2);                           // This just cuts the Last Retouched By part out.
                    var retoucherAmend = (localNameCut + " - " + pidNo);                     
                    cellStatusCheck();    // Checks to see what the cell status currently is. 
                }

            // Summarises the count

            
            /****************************************************************************************************************************************************       
            *************************   AFTER A COLUMN CYCLE ADD UP THE RESULTS OF A ROW    *********************************************************************
            *****************************************************************************************************************************************************/  
            
            
            var localImageCount=localApproved+localReadyForApproval+localUploaded+localNeedsColourMatching+localNeedsAmend+localBeingRetouched+localNeedsRechecking+localShotTaken+localNeedsReshoot+localFileMissing;

            var localImagesRetouched=localApproved+localReadyForApproval+localUploaded+localNeedsAmend;
            
            var localFinishCount = localImageCount - localApproved;

            var localSampleCount=localApproved+localReadyForApproval+localUploaded+localNeedsAmend;             // Has the item reached samples stage yet?


             var localImageCountRetoucher = localApprovedRetoucher+localReadyForApprovalRetoucher+localUploadedRetoucher+localNeedsColourMatchingRetoucher+localNeedsAmendRetoucher+localBeingRetouchedRetoucher+localNeedsRecheckingRetoucher+localShotTakenRetoucher+localNeedsReshootRetoucher+localFileMissingRetoucher;
            
 
            var localFinishCountRetoucher = localImageCountRetoucher - localApprovedRetoucher;

            var localSampleCountRetoucher = localApprovedRetoucher+localReadyForApprovalRetoucher+localUploadedRetoucher+localNeedsAmendRetoucher;             // Has the item reached samples stage yet?
            

            
            /****************************************************************************************************************************************************       
            *************************   ADD TO ANY ARRAYS   *********************************************************************
            *****************************************************************************************************************************************************/  
            
            

            if (localSampleCount == 0) {
               
                arSampleMissing.push(pidNo);
                
               }

             if (localFinishCount != 0 || localBlankCells == 12) {
                 if (productDetails.toLowerCase().indexOf("priority") != -1) {
                        arPriorityPIDs.push(pidNo + " - " + designerTextCut); 
                    }
                 }
                          

            if (localFileMissing > 0) {       // Pushes any file missing pids to an array
                arFileMissing.push(pidNo);
            }
            
              if (localNeedsReshoot > 0) {    //Pushes any reshoot pids to an array
                arNeedsReshoot.push(pidNo);
                }        
    
            
            
            if (localFinishCount != 0 || localBlankCells == 12) {
             if (productDescriptionText.toLowerCase().indexOf("merge") != -1) {
                arMergePIDs.push(pidNo + " - " + designerTextCut);
            }
    }
                    
            if (localImageCount == 0) {                             
                    arUnshotPids.push(pidNo);                                               // If no images shot move to an Unshot Pids Array
            } 
             else {
                    arUnfinishedPids.push(pidNo);                                           // If images don't fit either criteria, they must be unfinished!
            }  

             if (localImageCount>0) {
                if ((localImageCount - localImagesRetouched - localDeleteCell) <= 0) {
                pidFinishCountStrict++;
                         
            }
                else {
                
                }
            }
            
    }

    
  /****************************************************************************************************************************************************       
  *************************  AFTER GOING THROUGH ALL PID ROWS ADD UP THE TOTALS   *********************************************************************
  *****************************************************************************************************************************************************/  
    
    
    var globalImageCount = approved+readyForApproval+uploaded+needsColourMatching+beingRetouched+needsAmend+needsRechecking+shotTaken+needsReshoot+fileMissing;    // Adds all types together to get total images.
    
    var globalImageCountRetoucher = approvedRetoucher+readyForApprovalRetoucher+uploadedRetoucher+needsColourMatchingRetoucher+beingRetouchedRetoucher+needsAmendRetoucher+needsRecheckingRetoucher+shotTakenRetoucher+needsReshootRetoucher+fileMissingRetoucher;
    
    
    
    var globalPidsLeft = listOfPids.length - pidFinishCount;
    var globalPidsLeftStrict = listOfPids.length - pidFinishCountStrict;
    var globalImagesRetouched = approved + readyForApproval + uploaded;                                   // Gets all images that have been retouched
    
    var globalImagesRetouchedRetoucher = approvedRetoucher + readyForApprovalRetoucher + uploadedRetoucher;                                   // Gets all images that have been retouched
    
    var globalImagesToBeRetouched = needsColourMatching + beingRetouched + needsRechecking + shotTaken + needsAmend;       //Images where the retouch has not been finished.
    
    var globalImagesToBeRetouchedRetoucher = needsColourMatchingRetoucher + beingRetouchedRetoucher + needsRecheckingRetoucher + shotTakenRetoucher + needsAmendRetoucher;       //Images where the retouch has not been finished.
    
    var globalProblemImages = needsReshoot + fileMissing;                                                 // Images where there's an issue.
    
    var globalProblemImagesRetoucher = needsReshootRetoucher + fileMissingRetoucher;                                                 // Images where there's an issue.

    
  /****************************************************************************************************************************************************       
  *************************  SORT ANY ARRAYS WITH DUPLICATES AND REMOVE DUPLICATES*******************************************
  *****************************************************************************************************************************************************/  
    
    
    
    arAmendPids.sort();
    
    var arAmendPidsUnique = [];
    $.each(arAmendPids, function(i, el){
        if($.inArray(el, arAmendPidsUnique) === -1) arAmendPidsUnique.push(el);
    });

    arProductCategories.sort();
    
    var arProductCategoriesUnique = [];
    $.each(arProductCategories, function(i, el){
        if($.inArray(el, arProductCategoriesUnique) === -1) arProductCategoriesUnique.push(el);
    });

    
    
    
/****************************************************************************************************************************************************       
*************************   WRITE SUMMARY TO THE HTML   *********************************************************************
*****************************************************************************************************************************************************/  
    
    
    
    //WRITING A SUMMARY TO THE HTML

    newText = document.getElementsByClassName('navbar-inner')[0];

    var tick = '"tick.png"';
    var blankText = '"bullet_toggle_plus.png"';
    var approvedText = '"tick.png"';
    var readyForApprovalText = '"picture_edit.png"';
    var uploadedText = '"asterisk_yellow.png"';
    var needsAmendText = '"pencil.png"';
    var needsColourMatchingText = '"rainbow.png"';
    var beingRetouchedText = '"color_wheel.png"'
    // skip shot taken and needs rechecking (more complicated)
    var needsRecheckingText = '"picture_go.png"'
    var needsReshootText = '"exclamation.png"'
    var fileMissingText = '"cross.png"';
    var deleteText = '"delete.png"';
    
    //showMyPIDs(myName,myRole)

    // <th><input style='width: 100%; background-color: lightgrey; color: lightgoldenrodyellow;' onclick='showStaffCount();' value='Staff List' id='staffCountButton' type='button'></th>
    
 var optionsButtons = ("<table class='data' id = 'staffSummaryOptions' border='1' style = 'margin-bottom: 0px; font-size: 140%'> <thead><tr style='text-align: center;'> <th><input id='globalStatsButton' style='width: 100%; border-style: inherit;' value='Global Stats' onclick='showGlobalStats();showAllPIDs();' type='button'></th><th><input style='width: 100%; background-color: lightgrey; color: lightgoldenrodyellow;' onclick='showMyStats();showMyPIDs(myName,myRole);' value='" + myName + "s Stats' id='myStatsButton' type='button'></th></tr></thead></table>")   

var staffSummaryAdmin = ("<table class='data' id='staffSummaryAdmin' border='1' style = 'margin-bottom: 0px;'> <thead><tr style='text-align: center;'> <th>Total Image Count</th><th colspan='2'>Total Images Retouched <input class='filterButton' style='width: 60px; min-width: 60px;' type='button' value='Filter' onclick='filterImages(" + approvedText + "," + readyForApprovalText + "," + uploadedText + "); filterButtonSelect(0);' /></th><th  class='figures' style='background-color: rgb(175, 255, 157);'>" + globalImagesRetouched + "</th><th colspan='4'>Images to be Retouched <input class='filterButton' style='width: 60px; min-width: 60px;' type='button' value='Filter' onclick='filterImages(" + needsAmendText + "," + needsColourMatchingText + "," + beingRetouchedText + "," + needsRecheckingText + "); filterButtonSelect(1);' /></th><th class='figures' style='background-color: rgb(255, 191, 91);'>" + globalImagesToBeRetouched + "</th><th>Problem Images <input class='filterButton' style='width: 60px; min-width: 60px;' type='button' value='Filter' onclick='filterImages(" + fileMissingText + "," + deleteText + "," + needsReshootText + ");filterButtonSelect(2);' /></th><th  class='figures' style='background-color: rgb(255, 127, 127);'>" + globalProblemImages + "</th></tr></thead><tbody><tr  class='figures' style='text-align: center;'><td rowspan='2'>" + globalImageCount + "</td><td style='background-color: rgb(175, 255, 157);'>Approved</td><td style='background-color: rgb(175, 255, 157);'>Ready for Approval</td><td style='background-color: rgb(175, 255, 157);'>Uploaded</td><td style='background-color: rgb(255, 191, 91);'>Needs Amends</td><td style='background-color: rgb(255, 191, 91);'>Colour Match</td><td style='background-color: rgb(255, 191, 91);'>Being Retouched</td><td style='background-color: rgb(255, 191, 91);'>Needs Rechecking</td><td style='background-color: rgb(255, 191, 91);'>Shot Taken</td><td style='background-color: rgb(255, 127, 127);'>Needs Reshoot</td><td style='background-color: rgb(255, 127, 127);'>File Missing</td></tr><tr style='text-align: center;'><td class='figures'>" + approved + "</td><td class='figures'>" + readyForApproval + "</td><td class='figures'>" + uploaded + "</td><td class='figures'>" + needsAmend + "</td><td class='figures'>" + needsColourMatching + "</td><td class='figures'>" + beingRetouched + "</td><td class='figures'>" + needsRechecking + "</td><td class='figures'>" + shotTaken + "</td><td class='figures figuresPriority'>" + needsReshoot + "</td><td class='figures figuresPriority'>" + fileMissing + "</td></tr><tr style='text-align: center;'><td><input class='filterButton'  type='button' value='Show All PIDs' onclick='showAllPIDs();' /></td><td style='background-color: rgb(175, 255, 157);'><input class='filterButton' style='width: 60px; min-width: 60px;' type='button' value='Filter' onclick='filterImages(" + approvedText + ");filterButtonSelect(4);' /></td><td style='background-color: rgb(175, 255, 157);'><input class='filterButton' style='width: 60px; min-width: 60px;' type='button' value='Filter' onclick='filterImages(" + readyForApprovalText + ");filterButtonSelect(5);' /></td><td style='background-color: rgb(175, 255, 157);'><input class='filterButton' style='width: 60px; min-width: 60px;' type='button' value='Filter' onclick='filterImages(" + uploadedText + ");filterButtonSelect(6);' /></td><td style='background-color: rgb(255, 191, 91);'><input class='filterButton' style='width: 60px; min-width: 60px;' type='button' value='Filter' onclick='filterImages(" + needsAmendText + ");filterButtonSelect(7);' /></td><td style='background-color: rgb(255, 191, 91);'><input class='filterButton' style='width: 60px; min-width: 60px;' type='button' value='Filter' onclick='filterImages(" + needsColourMatchingText + ");filterButtonSelect(8);' /></td><td style = 'background-color: rgb(255, 191, 91);'><input class='filterButton' style='width: 60px; min-width: 60px;' type='button' value='Filter' onclick='filterImages(" + beingRetouchedText + ");filterButtonSelect(9);' /></td><td style='background-color: rgb(255, 191, 91);'><input class='filterButton' style='width: 60px; min-width: 60px;' type='button' value='Filter' onclick='showNeedsRecheckingPIDs();' /></td><td style='background-color: rgb(255, 191, 91);'><input class='filterButton' style='width: 60px; min-width: 60px;' type='button' value='Filter' onclick='showShotTakenPIDs();' /></td><td style='background-color: rgb(255, 127, 127);'><input class='filterButton' style='width: 60px; min-width: 60px;' type='button' value='Filter' onclick='filterImages(" + needsReshootText + ");filterButtonSelect(12);' /></td><td style='background-color: rgb(255, 127, 127);'><input class='filterButton' style='width: 60px; min-width: 60px;' type='button' value='Filter' onclick='filterImages(" + fileMissingText + ");filterButtonSelect(13);' /></td></tbody></table>");
    
   var staffSummaryIndividual = ("<table class='data' id='staffSummaryIndividual' border='1'> <thead><tr style='text-align: center;'> <th>Total Image Count</th><th colspan='2'>Total Images Retouched <input class='filterButton' style='width: 60px; min-width: 60px;' type='button' value='Filter' onclick='filterImagesRetoucher(" + approvedText + "," + readyForApprovalText + "," + uploadedText + ");filterButtonSelect(14);' /></th><th  class='figures' style='background-color: rgb(175, 255, 157);'>" + globalImagesRetouchedRetoucher + "</th><th colspan='4'>Images to be Retouched <input class='filterButton' style='width: 60px; min-width: 60px;' type='button' value='Filter' onclick='filterImagesRetoucher(" + needsAmendText + "," + needsColourMatchingText + "," + beingRetouchedText + "," + needsRecheckingText + ");filterButtonSelect(15);' /></th><th class='figures' style='background-color: rgb(255, 191, 91);'>" + globalImagesToBeRetouchedRetoucher + "</th><th>Problem Images <input class='filterButton' style='width: 60px; min-width: 60px;' type='button' value='Filter' onclick='filterImagesRetoucher(" + fileMissingText + "," + deleteText + ");filterButtonSelect(16);' /></th><th  class='figures' style='background-color: rgb(255, 127, 127);'>" + globalProblemImagesRetoucher + "</th></tr></thead><tbody><tr  class='figures' style='text-align: center;'><td rowspan='2'>" + globalImageCountRetoucher + "</td><td style='background-color: rgb(175, 255, 157);'>Approved</td><td style='background-color: rgb(175, 255, 157);'>Ready for Approval</td><td style='background-color: rgb(175, 255, 157);'>Uploaded</td><td style='background-color: rgb(255, 191, 91);'>Needs Amends</td><td style='background-color: rgb(255, 191, 91);'>Colour Match</td><td style='background-color: rgb(255, 191, 91);'>Being Retouched</td><td style='background-color: rgb(255, 191, 91);'>Needs Rechecking</td><td style='background-color: rgb(255, 191, 91);'>Shot Taken</td><td style='background-color: rgb(255, 127, 127);'>Needs Reshoot</td><td style='background-color: rgb(255, 127, 127);'>File Missing</td></tr><tr style='text-align: center;'><td class='figures'>" + approvedRetoucher + "</td><td class='figures'>" + readyForApprovalRetoucher + "</td><td class='figures'>" + uploadedRetoucher + "</td><td class='figures figuresPriority'>" + needsAmendRetoucher + "</td><td class='figures figuresPriority'>" + needsColourMatchingRetoucher + "</td><td class='figures'>" + beingRetouchedRetoucher + "</td><td class='figures figuresPriority figuresPriority'>" + needsRecheckingRetoucher + "</td><td class='figures'>" + shotTakenRetoucher + "</td><td class='figures figuresPriority'>" + needsReshootRetoucher + "</td><td class='figures figuresPriority'>" + fileMissingRetoucher + "</td></tr><tr style='text-align: center;'><td><input class='filterButton'  type='button' value='Show My PIDs' onclick='showMyPIDs(myName,myRole);filterButtonSelect(17);' /></td><td style='background-color: rgb(175, 255, 157);'><input class='filterButton' style='width: 60px; min-width: 60px;' type='button' value='Filter' onclick='filterImagesRetoucher(" + approvedText + ");filterButtonSelect(18);' /></td><td style='background-color: rgb(175, 255, 157);'><input class='filterButton' style='width: 60px; min-width: 60px;' type='button' value='Filter' onclick='filterImagesRetoucher(" + readyForApprovalText + ");filterButtonSelect(19);' /></td><td style='background-color: rgb(175, 255, 157);'><input class='filterButton' style='width: 60px; min-width: 60px;' type='button' value='Filter' onclick='filterImagesRetoucher(" + uploadedText + ");filterButtonSelect(20);' /></td><td style='background-color: rgb(255, 191, 91);'><input class='filterButton' style='width: 60px; min-width: 60px;' type='button' value='Filter' onclick='filterImagesRetoucher(" + needsAmendText + ");filterButtonSelect(21);' /></td><td style='background-color: rgb(255, 191, 91);'><input class='filterButton' style='width: 60px; min-width: 60px;' type='button' value='Filter' onclick='filterImagesRetoucher(" + needsColourMatchingText + ");filterButtonSelect(22);' /></td><td style = 'background-color: rgb(255, 191, 91);'><input class='filterButton' style='width: 60px; min-width: 60px;' type='button' value='Filter' onclick='filterImagesRetoucher(" + beingRetouchedText + ");filterButtonSelect(23);' /></td><td style='background-color: rgb(255, 191, 91);'><input class='filterButton' style='width: 60px; min-width: 60px;' type='button' value='Filter' onclick='showNeedsRecheckingPIDsRetoucher();' /></td><td style='background-color: rgb(255, 191, 91);'><input class='filterButton' style='width: 60px; min-width: 60px;' type='button' value='Filter' onclick='showShotTakenPIDsRetoucher();' /></td><td style='background-color: rgb(255, 127, 127);'><input class='filterButton' style='width: 60px; min-width: 60px;' type='button' value='Filter' onclick='filterImagesRetoucher(" + needsReshootText + ");filterButtonSelect(26);' /></td><td style='background-color: rgb(255, 127, 127);'><input class='filterButton' style='width: 60px; min-width: 60px;' type='button' value='Filter' onclick='filterImagesRetoucher(" + fileMissingText + ");filterButtonSelect(27);' /></td></tr></tbody></table>");
    
 /*
    
    var staffSummaryInfo = ("<table class='data' id='staffSummaryInfo' border='1'><thead><tr><p style='font-size: 16px;'>" + pidListTitle + " LEFT TO RETOUCH: <span style='color:red;'>" + globalPidsLeftStrict + " of " + listOfPids.length + "</span></p></tr><thead></table><p style='word-wrap: break-word;'>" + "Priority PIDs to complete (" + arPriorityPIDs.length + ") - " + arPriorityPIDs + "   <input class='filterButton' style='width: 60px; min-width: 60px;' type='button' value='Filter' onclick='showPriorityPIDs();' /></p><p style='word-wrap: break-word;'>" + "Merge PIDs to complete (" + arMergePIDs.length + ") - " + arMergePIDs + "    <input class='filterButton' style='width: 60px; min-width: 60px;' type='button' value='Filter' onclick='showMergePIDs();' /></p><p style='word-wrap: break-word;'>" + "PIDs with Amends (" + arAmendPidsUnique.length + ") - " + arAmendPidsUnique + "</p><p style='word-wrap: break-word;'>" + "PIDs needing Samples (" + arSampleMissing.length + ") - " + arSampleMissing + "    <input class='filterButton' style='width: 60px; min-width: 60px;' type='button' value='Filter' onclick='showSamplesNeededPIDs();' /></p><p style='word-wrap: break-word;'>" + "Unshot PIDs (" + arUnshotPids.length + ") - " + arUnshotPids + "    <input class='filterButton' style='width: 60px; min-width: 60px;' type='button' value='Filter' onclick='showUnshotPIDs();' /></p>");
    
    */
    
     var retouchSummaryTwo = ("<table class='data' id='retouchSummaryInfo' border='1' style='word-wrap: break-word; table-layout: fixed;' width='100%'><thead><tr><th style='font-size: 16px;'>" + pidListTitle + " LEFT TO RETOUCH: <span style='color:red;'>" + globalPidsLeftStrict + " of " + listOfPids.length + "</span></th></tr></thead><tr><td style='word-wrap: break-word;'>" + "Priority PIDs to complete (" + arPriorityPIDs.length + ") - " + arPriorityPIDs + "   <input class='filterButton' style='width: 60px; min-width: 60px;' type='button' value='Filter' onclick='showPriorityPIDs();' /></td></tr><tr><td>" + "Merge PIDs to complete (" + arMergePIDs.length + ") - " + arMergePIDs + "    <input class='filterButton' style='width: 60px; min-width: 60px;' type='button' value='Filter' onclick='showMergePIDs();' /></td></tr><tr><td>" + "PIDs with Amends (" + arAmendPidsUnique.length + ") - " + arAmendPidsUnique + "</td></tr><tr><td>" + "PIDs needing Samples (" + arSampleMissing.length + ") - " + arSampleMissing + "    <input class='filterButton' style='width: 60px; min-width: 60px;' type='button' value='Filter' onclick='showSamplesNeededPIDs();' /></td></tr><tr><td>" + "Unshot PIDs (" + arUnshotPids.length + ") - " + arUnshotPids + "    <input class='filterButton' style='width: 60px; min-width: 60px;' type='button' value='Filter' onclick='showUnshotPIDs();' /></td><tr></table>");
    
 

 newText.insertAdjacentHTML( 'beforeend', optionsButtons);    
    
 newText.insertAdjacentHTML( 'beforeend', staffSummaryAdmin);
    
 newText.insertAdjacentHTML( 'beforeend', staffSummaryIndividual);

    newText.insertAdjacentHTML( 'beforeend', retouchSummaryTwo);

    figures();
    figuresPriority();
  
    
var globalStatsButton = document.getElementById('globalStatsButton');
var myStatsButton = document.getElementById('myStatsButton');
var staffCountButton = document.getElementById('staffCountButton');    
    
 document.getElementById("staffSummaryIndividual").style.visibility = "collapse";    
    
    function figures () {
        
        var greyOutValues = document.getElementsByClassName('figures');
        
        for (var i = 0; i < greyOutValues.length; ++i) {
              if (greyOutValues[i].textContent == 0) { 
            
            greyOutValues[i].style.color = "lightgray";
              }
    }
        
    }
      
       
      function figuresPriority () {
        
        var redValues = document.getElementsByClassName('figuresPriority');
        
        for (var i = 0; i < redValues.length; ++i) {
              if (redValues[i].textContent != 0) { 
            
            redValues[i].style.color = "white";
                  redValues[i].style.backgroundColor = "red";
                  redValues[i].style.fontSize = "medium";
                  
              }
    }
        
    }
        

    function cellStatusCheck() {

                    var cells = document.getElementById("image_icon_" + pidNo + "_" + n).src;                    
                    var cellBGColor = document.getElementById("image_info_" + pidNo + "_" + n).style.backgroundColor;    
                    cells = cells.replace(/^.*[\\\/]/, '');     

                    if (cells == "bullet_toggle_plus.png") {
                            blankCells++;
                            localBlankCells++;
                        if (localNameCut == myName) {
                            blankCellsRetoucher++;
                            localBlankCellsRetoucher++;
                        }
                    }

                    else if (cells == "tick.png") {
                            approved++;
                            localApproved++;
                         if (localNameCut == myName) {
                             approvedRetoucher++;
                            localApprovedRetoucher++;
                        }
                    }

                    else if (cells == "picture_edit.png") {
                            readyForApproval++;
                            localReadyForApproval++;
                         if (localNameCut == myName) {
                             readyForApprovalRetoucher++;
                            localReadyForApprovalRetoucher++;
                        }

                    }

                    else if (cells == "asterisk_yellow.png") {
                            uploaded++;
                            localUploaded++;
                         if (localNameCut == myName) {
                             uploadedRetoucher++;
                            localUploadedRetoucher++;
                        }

                    }

                    else if (cells == "delete.png") {
                            deleteCell++;
                            localDeleteCell++;
                         if (localNameCut == myName) {
                            deleteCellRetoucher++;
                            localDeleteCellRetoucher++;

                        }

                    }

                     else if (cells == "pencil.png")  {
                            needsAmend++;
                           localNeedsAmend++;
                         arAmendPids.push(retoucherAmend);
                          if (localNameCut == myName) {
                            needsAmendRetoucher++;
                           localNeedsAmendRetoucher++;
                        }
                  }


                    else if (cells == "rainbow.png") {
                            needsColourMatching++;
                            localNeedsColourMatching++;
                         if (localNameCut == myName) {
                            needsColourMatchingRetoucher++;
                            localNeedsColourMatchingRetoucher++;
                        }
                    }

                    else if (cells == "color_wheel.png") {
                            beingRetouched++;
                            localBeingRetouched++;
                         if (localNameCut == myName) {
                             beingRetouchedRetoucher++;
                            localBeingRetouchedRetoucher++;
                        }
                    }


                    else if (cells == "picture_go.png" && cellBGColor == "rgb(255, 255, 255)") {
                            shotTaken++;
                            localShotTaken++;
                         if (localNameCut == myName) {
                              shotTakenRetoucher++;
                            localShotTakenRetoucher++;
                        }
                    }

                    else if (cells == "picture_go.png") {
                            needsRechecking++;
                            localNeedsRechecking++;
                         if (localNameCut == myName) {
                            needsRecheckingRetoucher++;
                            localNeedsRecheckingRetoucher++;
                        }
                    }

                    else if (cells == "exclamation.png") {
                            needsReshoot++;
                            localNeedsReshoot++;
                         if (localNameCut == myName) {
                             needsReshootRetoucher++;
                            localNeedsReshootRetoucher++;
                        }
                    }

                    else if (cells == "cross.png") {
                            fileMissing++;
                            localFileMissing++;
                         if (localNameCut == myName) {
                            fileMissingRetoucher++;
                            localFileMissingRetoucher++;
                        }
                    }



                   

                    }

function showAllPIDs () {

    for (var i = 0; i < filterButtons.length; ++i) {
        filterButtons[i].style.backgroundColor = "";
    }
    
    for (var i = 0; i < pidRows.length; ++i) {
   
            document.getElementsByClassName("pid_rows")[i].style.visibility = "visible"; 
    }
    
       for (var i = 0; i < labelRows.length; ++i) {
   
            document.getElementsByClassName("label_rows")[i].style.visibility = "visible"; 
    }
    
                 
    
    
    for (var i = 0; i < listOfPids.length; ++i) {
   
            var pidNo = listOfPids[i].innerText;  
                    
            for (var n = 1; n < 13;n++)   { 
      
                 document.getElementById("image_info_" + pidNo + "_" + n).style.visibility = "visible";

            }
    }
}

function showMyPIDs (staffName,theirRole) {
    showAllPIDs();
    
    

 for (var i = 0; i < labelRows.length; ++i) {
   
            document.getElementsByClassName("label_rows")[i].style.visibility = "collapse"; 
    }


    for (var i = 0; i < listOfPids.length; ++i) {
        var pidNo = listOfPids[i].innerText;  
        
        var localNameMatchCount = 0;   
                   
            for (var n = 1; n < 13;n++)   { 
                var localNameMatch = 0;
                var localName = document.getElementById(theirRole + "_label_" + pidNo + "_" + n).title;     // Gets the retoucher name for PID Focus.
                
                localNameMatch = localName.search(staffName);
                localNameMatchCount = localNameMatch + localNameMatchCount;
                
                }
                
                if (localNameMatchCount < 0) {
                 document.getElementsByClassName("pid_rows")[i].style.visibility = "collapse"
                                  }
    }
}    
    
 
function getAllNames () { 
    
    for (var i = 0; i < listOfPids.length; ++i) {
        var pidNo = listOfPids[i].innerText;  

                   
            for (var n = 1; n < 13;n++)   { 
               var retouchersName = document.getElementById("retoucher" + "_label_" + pidNo + "_" + n).title;     // Gets the retoucher name.
                var photographersName = document.getElementById("photographer" + "_label_" + pidNo + "_" + n).title;     // Gets the photographer name.
               retouchersName = retouchersName.substr(retouchersName.indexOf(": ") + 2);                   // This just cuts the Last Retouched By part out.
               photographersName = photographersName.substr(photographersName.indexOf(": ") + 2);                   // This just cuts the Last Retouched By part out.
                arRetouchers.push(retouchersName); 
                arPhotographers.push(photographersName);
                 arRetouchers.sort();
                arPhotographers.sort();
                }
             }
    
    $.each(arRetouchers, function(i, el){
        if($.inArray(el, arRetouchersUnique) === -1) arRetouchersUnique.push(el);
    });

       
    $.each(arPhotographers, function(i, el){
        if($.inArray(el, arPhotographersUnique) === -1) arPhotographersUnique.push(el);
    });       


     for (var i = 0;i < arRetouchersUnique.length;i++) {
        if (arRetouchersUnique[i].length < 3) {
            arRetouchersUnique.splice(i,1);
        }
    }
    
      for (var i = 0;i < arPhotographersUnique.length;i++) {
        photographersListText += ""
          if (arPhotographersUnique[i].length < 3) {
            arPhotographersUnique.splice(i,1);
        }
    }

 

    
    
}    

    
    function getRetoucherImageCount () {
    
// WIP
        
       }   
 
    
function showGlobalStats () {

globalStatsButton.style.borderStyle = "inherit";
globalStatsButton.style.backgroundColor = "white";
globalStatsButton.style.color = "black";       
myStatsButton.style.borderStyle = "none";
myStatsButton.style.backgroundColor = "lightgrey";
myStatsButton.style.color = "lightgoldenrodyellow";

/*    
staffCountButton.style.borderStyle = "none";
staffCountButton.style.backgroundColor = "lightgrey";
staffCountButton.style.color = "lightgoldenrodyellow";       
  */  
document.getElementById("staffSummaryAdmin").style.visibility = "visible";
document.getElementById("staffSummaryIndividual").style.visibility = "collapse";
// document.getElementById("staffSummaryInfo").style.visibility = "collapse"; 

}   
 
function showMyStats () {
    
myStatsButton.style.borderStyle = "inherit";
myStatsButton.style.backgroundColor = "white";
myStatsButton.style.color = "black";
    
globalStatsButton.style.borderStyle = "none";
globalStatsButton.style.backgroundColor = "lightgrey";
globalStatsButton.style.color = "lightgoldenrodyellow";
/* 
    staffCountButton.style.borderStyle = "none";
staffCountButton.style.backgroundColor = "lightgrey";
staffCountButton.style.color = "lightgoldenrodyellow";
 */ 
document.getElementById("staffSummaryAdmin").style.visibility = "collapse";    
document.getElementById("staffSummaryIndividual").style.visibility = "visible";

//    document.getElementById("staffSummaryInfo").style.visibility = "collapse";  
    
}   
    
function showStaffCount () {
 /*    
staffCountButton.style.borderStyle = "inherit";
staffCountButton.style.backgroundColor = "white";
staffCountButton.style.color = "black";   
  */    
myStatsButton.style.borderStyle = "none";
myStatsButton.style.backgroundColor = "lightgrey";
myStatsButton.style.color = "lightgoldenrodyellow";     
globalStatsButton.style.borderStyle = "none";
globalStatsButton.style.backgroundColor = "lightgrey";
globalStatsButton.style.color = "lightgoldenrodyellow";

    
    
document.getElementById("staffSummaryAdmin").style.visibility = "collapse";
document.getElementById("staffSummaryIndividual").style.visibility = "collapse";  
document.getElementById("staffSummaryInfo").style.visibility = "visible";      
    
}     


       

function hideBlankRows () {
    
        for (var i = 0; i < pidRows.length; ++i) {
   
            document.getElementsByClassName("pid_rows")[i].style.visibility = "visible"; 
    }
    

 for (var i = 0; i < labelRows.length; ++i) {
   
            document.getElementsByClassName("label_rows")[i].style.visibility = "collapse"; 
    }


    for (var i = 0; i < listOfPids.length; ++i) {
        var pidNo = listOfPids[i].innerText;  
        
        var localBlankMatchCount = 0;   
                   
            for (var n = 1; n < 13;n++)   { 
                var localBlankMatch = 0;
                var localBlank = document.getElementById("image_info_" + pidNo + "_" + n).style.visibility;
                
                localBlankMatch = localBlank.search("hidden");
                localBlankMatchCount = localBlankMatch + localBlankMatchCount;
                
                }
                if (localBlankMatchCount == 0) {
  
                 document.getElementsByClassName("pid_rows")[i].style.visibility = "collapse";
                                  }
    }
  
}   

    /* More complicated functions */

     
function filterButtonSelect(filterButNo) {
    document.getElementsByClassName('filterButton')[filterButNo].style.backgroundColor = "yellow";
}
    
    

function filterImages (imageicon1,imageicon2,imageicon3,imageicon4,imageicon5,imageicon6) {

    showAllPIDs();



    for (var i = 0; i < listOfPids.length; ++i) {
        var pidNo = listOfPids[i].innerText;  
        
        flushLocalValues();
        var localCellChangeCount = 0;
        
            for (var n = 1; n < 13;n++)   { 
                var cells = document.getElementById("image_icon_" + pidNo + "_" + n).src;                    
                var cellBGColor = document.getElementById("image_info_" + pidNo + "_" + n).style.backgroundColor;    
                cells = cells.replace(/^.*[\\\/]/, ''); 
                    
                 if ((cells == imageicon1 || cells == imageicon2 || cells == imageicon3 || cells == imageicon4 || cells == imageicon5 || cells == imageicon6 )) {

                    localCellChangeCount++;
                }
                }
      
         if (localCellChangeCount == 0) {
             for (var n = 1; n < 13;n++)   { 
                document.getElementById("image_info_" + pidNo + "_" + n).style.visibility = "hidden"; 
             }
        }   
    }
    hideBlankRows();
}    
    
    function filterImagesRetoucher (imageicon1,imageicon2,imageicon3,imageicon4,imageicon5,imageicon6) {

    showAllPIDs();

    document.getElementsByClassName('filterButton')[0].style.backgroundColor = "yellow";

    for (var i = 0; i < listOfPids.length; ++i) {
        var pidNo = listOfPids[i].innerText;  
        
        flushLocalValues();
        var localCellChangeCount = 0;
        
            for (var n = 1; n < 13;n++)   { 
                var localName = document.getElementById(myRole + "_label_" + pidNo + "_" + n).title;     // Gets the retoucher name for PID Focus.
                var localNameCut = localName.substr(localName.indexOf(": ") + 2);                   // This just cuts the Last Retouched By part out.
                 
                var cells = document.getElementById("image_icon_" + pidNo + "_" + n).src;                    
                var cellBGColor = document.getElementById("image_info_" + pidNo + "_" + n).style.backgroundColor;    
                cells = cells.replace(/^.*[\\\/]/, ''); 
                
                 if ((cells == imageicon1 || cells == imageicon2 || cells == imageicon3 || cells == imageicon4 || cells == imageicon5 || cells == imageicon6 )) {
                 
                       if (myName == localNameCut) {
                
                    localCellChangeCount++;
                     }
                   

                    }
                }
      
         if (localCellChangeCount == 0) {
             for (var n = 1; n < 13;n++)   { 
  
                document.getElementById("image_info_" + pidNo + "_" + n).style.visibility = "hidden"; 
             }
        }   
    }
    hideBlankRows();

}    
    
function showNeedsRecheckingPIDs () {
     showAllPIDs();
    
       

     document.getElementsByClassName('filterButton')[10].style.backgroundColor = "yellow";
    
    for (var i = 0; i < listOfPids.length; ++i) {
        var pidNo = listOfPids[i].innerText;  
        
        flushLocalValues();
        var localCellChangeCount = 0;           
            for (var n = 1; n < 13;n++)   { 
                var cells = document.getElementById("image_icon_" + pidNo + "_" + n).src;                    
                var cellBGColor = document.getElementById("image_info_" + pidNo + "_" + n).style.backgroundColor;    
                cells = cells.replace(/^.*[\\\/]/, ''); 
                
                
                if ((cells == "picture_go.png" && cellBGColor == "rgb(192, 192, 192)")) {
                  
                    localCellChangeCount++;

                    }
                }
      
          if (localCellChangeCount == 0) {
             for (var n = 1; n < 13;n++)   { 
                document.getElementById("image_info_" + pidNo + "_" + n).style.visibility = "hidden"; 
             }
        }   
   
    }
    hideBlankRows();
}

function showShotTakenPIDs () {
     showAllPIDs();
    
       

     document.getElementsByClassName('filterButton')[11].style.backgroundColor = "yellow";
    
    for (var i = 0; i < listOfPids.length; ++i) {
        var pidNo = listOfPids[i].innerText;  
        
        flushLocalValues();
        var localCellChangeCount = 0;
                   
            for (var n = 1; n < 13;n++)   { 
                var cells = document.getElementById("image_icon_" + pidNo + "_" + n).src;                    
                var cellBGColor = document.getElementById("image_info_" + pidNo + "_" + n).style.backgroundColor;    
                cells = cells.replace(/^.*[\\\/]/, ''); 
                
                if ((cells == "picture_go.png" && cellBGColor == "rgb(255, 255, 255)")) {
                  
                    localCellChangeCount++;

                    }
                }
      
          if (localCellChangeCount == 0) {
             for (var n = 1; n < 13;n++)   { 
                document.getElementById("image_info_" + pidNo + "_" + n).style.visibility = "hidden"; 
             }
        }    
                    
    }
    hideBlankRows();
}

    
  function showPriorityPIDs () {
     showAllPIDs();
    
    
        

     document.getElementsByClassName('filterButton')[28].style.backgroundColor = "yellow";
    
    for (var i = 0; i < listOfPids.length; ++i) {
        var pidNo = listOfPids[i].innerText;  
         var productDetails = document.getElementsByClassName('product_details')[i].innerText;
        var matchString = 'priority';
        flushLocalValues();
        
       if (productDetails.toLowerCase().indexOf(matchString) == -1){
         for (var n = 1; n < 13;n++)   { 
                document.getElementById("image_info_" + pidNo + "_" + n).style.visibility = "hidden"; 
             }
        }
                
            
    }
    hideBlankRows();
}
    
      function showMergePIDs () {
     showAllPIDs();
    
     
     document.getElementsByClassName('filterButton')[29].style.backgroundColor = "yellow";
    
    for (var i = 0; i < listOfPids.length; ++i) {
        var pidNo = listOfPids[i].innerText;  
        var productDetails = document.getElementsByClassName('product_description')[i].innerText;
        var productDescriptionText = document.getElementsByClassName('product_description')[i].innerText;
        var matchString = 'merge';
           
        flushLocalValues();
    
        if (productDescriptionText.toLowerCase().indexOf(matchString) == -1){
         for (var n = 1; n < 13;n++)   { 
                document.getElementById("image_info_" + pidNo + "_" + n).style.visibility = "hidden"; 
             }
        }   
    }
    hideBlankRows();
}

 function showUnshotPIDs () {
     showAllPIDs();
    
        

     document.getElementsByClassName('filterButton')[17].style.backgroundColor = "yellow";
    
    for (var i = 0; i < listOfPids.length; ++i) {
        var pidNo = listOfPids[i].innerText;  
                
        flushLocalValues();
        var localShotPIDs = 0;
                   
            for (var n = 1; n < 13;n++)   { 
                var cells = document.getElementById("image_icon_" + pidNo + "_" + n).src;                    
                var cellBGColor = document.getElementById("image_info_" + pidNo + "_" + n).style.backgroundColor;    
                cells = cells.replace(/^.*[\\\/]/, ''); 
                
                if (cells == "tick.png" || cells == "picture_edit.png" || cells == "asterisk_yellow.png" || cells == "delete.png" || cells == "pencil.png" || cells == "rainbow.png" || cells == "color_wheel.png" || cells == "picture_go.png" || cells == "exclamation.png" || cells == "cross.png") {
                    localShotPIDs++;
                    }
                } 
      if (localShotPIDs > 0) {
             for (var n = 1; n < 13;n++)   { 
                document.getElementById("image_info_" + pidNo + "_" + n).style.visibility = "hidden"; 
             }
        }
            
    }
    hideBlankRows();
}    
    
function showSamplesNeededPIDs () {
     showAllPIDs();
    
    
        

     document.getElementsByClassName('filterButton')[30].style.backgroundColor = "yellow";
    
    for (var i = 0; i < listOfPids.length; ++i) {
        var pidNo = listOfPids[i].innerText;  
                
        flushLocalValues();
        var colourMatchedPIDs = 0;
                   
            for (var n = 1; n < 13;n++)   { 
                var cells = document.getElementById("image_icon_" + pidNo + "_" + n).src;                    
                var cellBGColor = document.getElementById("image_info_" + pidNo + "_" + n).style.backgroundColor;    
                cells = cells.replace(/^.*[\\\/]/, ''); 
                
                
                
                if (cells == "tick.png" || cells == "picture_edit.png" || cells == "asterisk_yellow.png" || cells == "pencil.png") {
                    
                    colourMatchedPIDs++;
                    }
                
                } 
      if (colourMatchedPIDs > 0) {
             for (var n = 1; n < 13;n++)   { 
                document.getElementById("image_info_" + pidNo + "_" + n).style.visibility = "hidden"; 
             }
        }
            
    }
    hideBlankRows();
}    
  
    
    
    //   RETOUCHER EQUIVALENTS OF ALL THATRETOUCHER EQUIVALENTS OF ALL THATRETOUCHER EQUIVALENTS OF ALL THATRETOUCHER EQUIVALENTS OF ALL THATRETOUCHER EQUIVALENTS OF ALL THAT
     //   RETOUCHER EQUIVALENTS OF ALL THATRETOUCHER EQUIVALENTS OF ALL THATRETOUCHER EQUIVALENTS OF ALL THATRETOUCHER EQUIVALENTS OF ALL THATRETOUCHER EQUIVALENTS OF ALL THAT
     //   RETOUCHER EQUIVALENTS OF ALL THATRETOUCHER EQUIVALENTS OF ALL THATRETOUCHER EQUIVALENTS OF ALL THATRETOUCHER EQUIVALENTS OF ALL THATRETOUCHER EQUIVALENTS OF ALL THAT
     //   RETOUCHER EQUIVALENTS OF ALL THATRETOUCHER EQUIVALENTS OF ALL THATRETOUCHER EQUIVALENTS OF ALL THATRETOUCHER EQUIVALENTS OF ALL THATRETOUCHER EQUIVALENTS OF ALL THAT
     //   RETOUCHER EQUIVALENTS OF ALL THATRETOUCHER EQUIVALENTS OF ALL THATRETOUCHER EQUIVALENTS OF ALL THATRETOUCHER EQUIVALENTS OF ALL THATRETOUCHER EQUIVALENTS OF ALL THAT
     //   RETOUCHER EQUIVALENTS OF ALL THATRETOUCHER EQUIVALENTS OF ALL THATRETOUCHER EQUIVALENTS OF ALL THATRETOUCHER EQUIVALENTS OF ALL THATRETOUCHER EQUIVALENTS OF ALL THAT
     //   RETOUCHER EQUIVALENTS OF ALL THATRETOUCHER EQUIVALENTS OF ALL THATRETOUCHER EQUIVALENTS OF ALL THATRETOUCHER EQUIVALENTS OF ALL THATRETOUCHER EQUIVALENTS OF ALL THAT
     //   RETOUCHER EQUIVALENTS OF ALL THATRETOUCHER EQUIVALENTS OF ALL THATRETOUCHER EQUIVALENTS OF ALL THATRETOUCHER EQUIVALENTS OF ALL THATRETOUCHER EQUIVALENTS OF ALL THAT
        


function showNeedsRecheckingPIDsRetoucher () {
     showAllPIDs();
    
       

     document.getElementsByClassName('filterButton')[24].style.backgroundColor = "yellow";
    
    for (var i = 0; i < listOfPids.length; ++i) {
        var pidNo = listOfPids[i].innerText;  
        
        flushLocalValues();
        var localCellChangeCount = 0;           
            for (var n = 1; n < 13;n++)   { 
                  var localName = document.getElementById(myRole + "_label_" + pidNo + "_" + n).title;     // Gets the retoucher name for PID Focus.
                    var localNameCut = localName.substr(localName.indexOf(": ") + 2);                   // This just cuts the Last Retouched By part out.
                  
                var cells = document.getElementById("image_icon_" + pidNo + "_" + n).src;                    
                var cellBGColor = document.getElementById("image_info_" + pidNo + "_" + n).style.backgroundColor;    
                cells = cells.replace(/^.*[\\\/]/, ''); 
                
                
                if ((cells == "picture_go.png" && cellBGColor == "rgb(192, 192, 192)")) {
                  
                
                     if (myName == localNameCut) {
                     
                    localCellChangeCount++;
                     }

                    }
                }
      
          if (localCellChangeCount == 0) {
             for (var n = 1; n < 13;n++)   { 
                document.getElementById("image_info_" + pidNo + "_" + n).style.visibility = "hidden"; 
             }
        }   
   
    }
    hideBlankRows();
}

function showShotTakenPIDsRetoucher () {
     showAllPIDs();

     document.getElementsByClassName('filterButton')[25].style.backgroundColor = "yellow";
    
    for (var i = 0; i < listOfPids.length; ++i) {
        var pidNo = listOfPids[i].innerText;  
        
        flushLocalValues();
        var localCellChangeCount = 0;
                   
            for (var n = 1; n < 13;n++)   { 
                  var localName = document.getElementById(myRole + "_label_" + pidNo + "_" + n).title;     // Gets the retoucher name for PID Focus.
                    var localNameCut = localName.substr(localName.indexOf(": ") + 2);                   // This just cuts the Last Retouched By part out.
                   
                var cells = document.getElementById("image_icon_" + pidNo + "_" + n).src;                    
                var cellBGColor = document.getElementById("image_info_" + pidNo + "_" + n).style.backgroundColor;    
                cells = cells.replace(/^.*[\\\/]/, ''); 
                
                if ((cells == "picture_go.png" && cellBGColor == "rgb(255, 255, 255)")) {
                  
           
                     if (myName == localNameCut) {
                     
                    localCellChangeCount++;
                     }

                    }
                }
      
          if (localCellChangeCount == 0) {
             for (var n = 1; n < 13;n++)   { 
                document.getElementById("image_info_" + pidNo + "_" + n).style.visibility = "hidden"; 
             }
        }    
                    
    }
    hideBlankRows();
}  
    
function showRetoucherStats(retoucherName) {
    myName
    
    
}
    
    

function flushLocalValues () {
    
     // IMAGES RETOUCHED

             localApproved=0;
             localReadyForApproval=0;
             localUploaded=0;

            // IMAGES NEED RETOUCHING

             localNeedsAmend=0;
             localNeedsColourMatching=0;
             localBeingRetouched=0;
             localNeedsRechecking=0;
             localShotTaken=0;

            // IMAGES MISSING

             localNeedsReshoot=0;
             localFileMissing=0;

            // IMAGE CELL NOT IN USE

             localBlankCells=0;
             localDeleteCell=0;

            // IN CASE IVE MISSED A CATEGORY

             localUnlistedCategory=0;

            // CELL COUNTS, NOT USED AT THE MOMENT BUT COULD BE USED TO SEARCH FOR MISSING FILES.

             localINcount=0;
             localFRcount=0;
             localBKcount=0;
             localOUcount=0;
             localCUcount=0;
             localE1count=0;
             localE2count=0;
             localE3count=0;
             localE4count=0;
            
            // Retoucher Version
            
              // IMAGES RETOUCHED

             localApprovedRetoucher=0;
             localReadyForApprovalRetoucher=0;
             localUploadedRetoucher=0;

            // IMAGES NEED RETOUCHING

             localNeedsAmendRetoucher=0;
             localNeedsColourMatchingRetoucher=0;
             localBeingRetouchedRetoucher=0;
             localNeedsRecheckingRetoucher=0;
             localShotTakenRetoucher=0;

            // IMAGES MISSING

             localNeedsReshootRetoucher=0;
             localFileMissingRetoucher=0;

            // IMAGE CELL NOT IN USE

             localBlankCellsRetoucher=0;
             localDeleteCellRetoucher=0;

            // IN CASE IVE MISSED A CATEGORY

             localUnlistedCategoryRetoucher=0;
}

showAllPIDs();

    /*

    ************************************************************

    COUNT SHOT TYPES


    var localImageLocation = ("http://cache.mrporter.com/images/products/" + pidNo + "/" + pidNo + "_mrp_" + shotType + "_m2.jpg");    To be used later to count shot types


    var shotType = "in";



    *************************************************************


    // Samples Missing





    checkImageExists(localImageLocation, function(existsImage) {
    if(existsImage == true) {
    localINcount++;
    }
    else {
    console.log(shotType + " does not exist")
    }
    });



    checkImageExists(localImageLocation, function(existsImage) {
    if(existsImage == true) {
    localFRcount++;
    }
    else {
    console.log(shotType + " does not exist")
    }
    });


    checkImageExists(localImageLocation, function(existsImage) {
    if(existsImage == true) {
    localBKcount++;
    }
    else {
    console.log(shotType + " does not exist")
    }
    });


    checkImageExists(localImageLocation, function(existsImage) {
    if(existsImage == true) {
    localOUcount++;
    }
    else {
    console.log(shotType + " does not exist")
    }
    });



    checkImageExists(localImageLocation, function(existsImage) {
    if(existsImage == true) {
    localCUcount++;
    }
    else {
    console.log(shotType + " does not exist")
    }
    });


    checkImageExists(localImageLocation, function(existsImage) {
    if(existsImage == true) {
    localE1count++;
    }
    else {
    console.log(shotType + " does not exist")
    }
    });

    checkImageExists(localImageLocation, function(existsImage) {
    if(existsImage == true) {
    localE2count++;
    }
    else {
    console.log(shotType + " does not exist")
    }
    });

    checkImageExists(localImageLocation, function(existsImage) {
    if(existsImage == true) {
    localE3count++;
    }
    else {
    console.log(shotType + " does not exist")
    }
    });

    checkImageExists(localImageLocation, function(existsImage) {
    if(existsImage == true) {
    localE4count++;
    }
    else {
    console.log(shotType + " does not exist")
    }
    });

    */
