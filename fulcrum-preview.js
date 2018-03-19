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
 
var defaultImageTypes = ["in","rw","fr","bk","ou","ou2","ou3","cu","e1","e2","e3","e4","e5","e6"]
 
window.scrollTo(0, 0);
 
var listOfPids = document.getElementsByClassName('piditem');
 
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
        brandListPath = "mrporter";
    } else if (brandList.search("TON") >= 0) {
        brandList = "The Outnet";
        brandListPath = "theoutnet";
    } else {
        brandList = "Net A Porter";
        brandListPath = "net-a-porter";
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
            for (var n = 1; n <= 14;n++)     // Goes through the columns.
                {   
         
              var imgPaste = document.getElementById("image_info_" + pidNo + "_" + n);
             var imgLocation = "<IMG SRC='http://cache." + brandListPath + ".com/images/products/" + pidNo + "/" + pidNo + "_" + defaultImageTypes[n-1] + "_xs.jpg'</IMG>"; imgPaste.insertAdjacentHTML( 'afterbegin' , imgLocation)
           
                }
 
            // Summarises the count
 
             
            
     
     
     
    //WRITING A SUMMARY TO THE HTML
 
 
 
 /*
 
 newText.insertAdjacentHTML( 'beforeend', optionsButtons);    
     
 newText.insertAdjacentHTML( 'beforeend', staffSummaryAdmin);
     
 newText.insertAdjacentHTML( 'beforeend', staffSummaryIndividual);
 
    newText.insertAdjacentHTML( 'beforeend', retouchSummaryTwo);
 
     
   */
 
     
     
 
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
}
