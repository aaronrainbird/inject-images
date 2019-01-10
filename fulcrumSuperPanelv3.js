/* setInterval(function() {
   $( "#photography_worklist_details").load( "view .data:nth-child(1)", function () {
    console.log(currentHeight)
    loadProductImages();
    resetVariables();
    buildPids();
    fillInData();
    if (currentFilter != "") {
        filterLayers(arStatuses[currentFilter]['pids']);
    }
    console.log(currentHeight)
    window.scrollTo(0, currentHeight);
   });
}, 30000);

*/

var pidRows = document.querySelectorAll("[id^='row_for_pc']")
var listOfPids = document.getElementsByClassName('piditem');

buildPids();

/*
if (document.getElementById('staffSummaryAdmin') == undefined) {
    firstTimeRun();
}

 fillInData();
*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////// FUNCTIONS TO GET ALL STATS ON PAGE ///////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function buildPids(pids) {   // this builds arPIDs     
        let arFulcrum = {
          PIDs: generatePIDs(document.getElementsByClassName('piditem')),
          Statuses: {
            total: { pids: [], count: 0 },
            totalImagesRetouched: { pids: [], count: 0 },
            imagesToBeRetouched: { pids: [], count: 0 },
            problemImages: { pids: [], count: 0 },
            blank: { pids: [], count: 0 },
            approved: { pids: [], count: 0 },
            readyForApproval: { pids: [], count: 0 },
            uploaded: { pids: [], count: 0 },
            deleteCell: { pids: [], count: 0 },
            needsAmends: { pids: [], count: 0 },
            needsColourMatching: { pids: [], count: 0 },
            beingRetouched: { pids: [], count: 0 },
            shotTaken: { pids: [], count: 0 },
            needsRechecking: { pids: [], count: 0 },
            needsReshoot: { pids: [], count: 0 },
            fileMissing: { pids: [], count: 0 },
            video: { pids: [], count: 0 },
            unclassified: { pids: [], count: 0 }
          },
          Staff: { Retouchers: {}, Photographers: {} },
          Special: { designer: {}, category: {}, subCategory: {}, color: {} },
          Studio: {
              DC1: [],
              DC2: []
          },
          List: {
            Channel: document.getElementsByClassName("channel_logo")[0].alt.search("NAP") == 0 ? "Net A Porter" : "Mr Porter",
            Name: document.getElementById("user_status").childNodes[1].textContent,
            Title: document.getElementsByTagName("h3")[0].textContent
          }
        }

    

        // 
    
   
        // Build arSpecial
        /*
                specialObject("designer",i,document.getElementsByClassName("designer")[i].childNodes[0].data.trim())
                specialObject("category",i,document.getElementsByClassName("classification")[i].children[1].childNodes[0].data.trim())
                specialObject("subCategory",i,document.getElementsByClassName('classification')[i].childNodes[0].data.trim())
                specialObject("color",i,document.getElementsByClassName("classification")[i].childNodes[8].data.trim())
        */
            
        // studioObject(i,document.getElementsByClassName("designer")[i].childNodes[0].data.trim());  

        console.log(arFulcrum);

}

function generatePIDs(allPIDs) {

    let arPIDs = [];

for (let i = 0; i < allPIDs.length; ++i)         // Goes through the rows. 
{  
    arPIDs.push({
        PidNo: allPIDs[i].textContent,
        Price: grabPriceInfo(allPIDs[i].textContent),
        Designer: document.getElementsByClassName('designer')[i].textContent.split('PID')[0].trim(),
        ProductName: document.getElementsByClassName('product_name')[i].textContent.trim(),
        ProductDescription: document.getElementsByClassName('product_description')[i].textContent.trim(),
        ClassificationFirstCategory: document.getElementsByClassName('classification')[i].childNodes[3].textContent.trim(),
        ClassificationSecondCategory: document.getElementsByClassName('classification')[i].childNodes[0].data.trim(),
        Location: pidRows[i],
        Season: document.getElementsByClassName('classification')[i].childNodes[12].data.trim(),
        Video: document.getElementById("image_icon_" + allPIDs[i].textContent + "_15").src == "http://fulcrum.net-a-porter.com/static/images/icons/film.png",
        Colour: document.getElementsByClassName('classification')[i].childNodes[8].data.trim(),
        CellStatus: cellStatusCheck(i),
        DC: (document.getElementsByClassName('product_details')[i].textContent.search("Shot@") != -1) ? document.getElementsByClassName('product_details')[i].textContent.substr(document.getElementsByClassName('product_details')[i].textContent.search("Shot@") + 5, 10).trim() : "",
        Priority: document.getElementsByClassName('product_details')[i].textContent.search('Priority Item: ') != -1
    })
    
    }
    return arPIDs;
}







function cellStatusCheck(i) {


    for (let n = 0; n < 12; n++)  {   // Goes through the columns.
       
        let cellDetails = ({
            retoucher: document.getElementById("retoucher_label_" + listOfPids[i].textContent + "_" + (n + 1)).title.replace("Last Retouched By: ", ""),
            photographer: document.getElementById("photographer_label_" + listOfPids[i].textContent + "_" + (n + 1)).title.replace("Last Shot By: ", ""),
            image: document.getElementById("image_icon_" + listOfPids[i].textContent + "_" + (n + 1)).src.replace(/^.*[\\\/]/, ''),
            cellBGColor: document.getElementById("image_info_" + listOfPids[i].textContent + "_" + (n + 1)).style.backgroundColor,
            textStatus: iconCheck(document.getElementById("image_icon_" + allPIDs[i].textContent + "_" + (n + 1)).src.replace(/^.*[\\\/]/, ''),"status")
        })
    /*
        // Build Status Object
        statusObject(i, n, iconCheck(document.getElementById("image_icon_" + allPIDs[i].textContent + "_" + (n + 1)).src.replace(/^.*[\\\/]/, ''),"status"),iconCheck(document.getElementById("image_icon_" + allPIDs[i].textContent + "_" + (n + 1)).src.replace(/^.*[\\\/]/, ''),"category"))
    
        if (document.getElementById("retoucher_label_" + listOfPids[i].textContent + "_" + (n + 1)).title.replace("Last Retouched By: ", "") != "") {
            retoucherObject(document.getElementById("retoucher_label_" + listOfPids[i].textContent + "_" + (n + 1)).title.replace("Last Retouched By: ", ""), textStatus, i);
        }
    
        if (document.getElementById("retoucher_label_" + listOfPids[i].textContent + "_" + (n + 1)).title.replace("Last Shot By: ", "") != "") {
            photographerObject(document.getElementById("photographer_label_" + listOfPids[i].textContent + "_" + (n + 1)).title.replace("Last Shot By: ", ""), textStatus, i);
        }
        */
    
    ////////////////////////////////////////////////////////THIS IS WHERE YOU COULD SAVE THE OTHER DATA ON THE PAGE.
    }
        console.log(cellDetails)

        
    }




    function iconCheck(icon, option) {
        let icons = {
          "bullet_toggle_plus.png": {
            status: "blank",
            category: ""
          },
          "tick.png": {
            status: "approved",
            category: "totalImagesRetouched"
          },
          "picture_edit.png": {
            status: "readyForApproval",
            category: "totalImagesRetouched"
          },
          "asterisk_yellow.png": {
            status: "uploaded",
            category: "totalImagesRetouched"
          },
          "delete.png": {
            status: "deleteCell",
            category: ""
          },
          "pencil.png": {
            status: "needsAmends",
            category: "imagesToBeRetouched"
          },
          "rainbow.png": {
            status: "needsColourMatching",
            category: "imagesToBeRetouched"
          },
          "color_wheel.png": {
            status: "beingRetouched",
            category: "imagesToBeRetouched"
          },
          "exlamation.png": {
            status: "needsReshoot",
            category: "problemImages"
          },
          "cross.png": {
            status: "fileMissing",
            category: "problemImages"
          },
          "page_white.png": {
            status: "unclassified",
            category: ""
          },
          "film.png": {
            status: "video",
            category: ""
          }
        };
      
        return icons[icon][option];
    }

function grabPriceInfo(pid) {

    var xhttp = new XMLHttpRequest();
    var parser = new DOMParser();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            return(parser.parseFromString(this.responseText, "text/html"));
        }
    }
    xhttp.open("GET", "http://fulcrum.net-a-porter.com/product/" + pid + "/overview", true);
    xhttp.send();

}


/*

function cellStatusCheck(i, n, cell) {
    
    let icons = ["bullet_toggle_plus.png", "tick.png", "picture_edit.png", "asterisk_yellow.png", "delete.png", "pencil.png", "rainbow.png", "color_wheel.png", "exclamation.png", "cross.png", "page_white.png","film.png"]
    let iconsText = ["blank", "approved", "readyForApproval", "uploaded", "deleteCell", "needsAmends", "needsColourMatching", "beingRetouched", "needsReshoot", "fileMissing","unclassified", "video"]
    let totalImagesRetouched = ["approved", "readyForApproval", "uploaded"]
    let imagesToBeRetouched = ["needsAmends", "needsColourMatching", "beingRetouched", "needsRechecking", "shotTaken"]
    let problemImages = ["needsReshoot", "fileMissing"]

    var textStatus = "";
    var categoryStatus = "";

    if (icons.indexOf(cell) > -1) {
        textStatus = iconsText[icons.indexOf(cell)]
    }
    else if (cell == "picture_go.png" && document.getElementById("image_info_" + listOfPids[i].textContent + "_" + (n + 1)).style.backgroundColor == "rgb(255, 255, 255)") {
        textStatus = "shotTaken"
    }
    else if (cell == "picture_go.png") {
        textStatus = "needsRechecking";
    }

if (totalImagesRetouched.indexOf(textStatus) > -1) {
    categoryStatus = "totalImagesRetouched";
}
else if (imagesToBeRetouched.indexOf(textStatus) > -1) {
    categoryStatus = "imagesToBeRetouched";
}
else if (problemImages.indexOf(textStatus) > -1) {
    categoryStatus = "problemImages";
}

    var cellDetails = ({
        retoucher: document.getElementById("retoucher_label_" + listOfPids[i].textContent + "_" + (n + 1)).title.replace("Last Retouched By: ", ""),
        photographer: document.getElementById("photographer_label_" + listOfPids[i].textContent + "_" + (n + 1)).title.replace("Last Shot By: ", ""),
        image: document.getElementById("image_icon_" + listOfPids[i].textContent + "_" + (n + 1)).src.replace(/^.*[\\\/]/, ''),
        cellBGColor: document.getElementById("image_info_" + listOfPids[i].textContent + "_" + (n + 1)).style.backgroundColor,
        textStatus: textStatus
    })

    // Build Status Object
    statusObject(i, n, textStatus,categoryStatus)

    if (document.getElementById("retoucher_label_" + listOfPids[i].textContent + "_" + (n + 1)).title.replace("Last Retouched By: ", "") != "") {
        retoucherObject(document.getElementById("retoucher_label_" + listOfPids[i].textContent + "_" + (n + 1)).title.replace("Last Retouched By: ", ""), textStatus, i);
    }

    if (document.getElementById("retoucher_label_" + listOfPids[i].textContent + "_" + (n + 1)).title.replace("Last Shot By: ", "") != "") {
        photographerObject(document.getElementById("photographer_label_" + listOfPids[i].textContent + "_" + (n + 1)).title.replace("Last Shot By: ", ""), textStatus, i);
    }

////////////////////////////////////////////////////////THIS IS WHERE YOU COULD SAVE THE OTHER DATA ON THE PAGE.

    return cellDetails;
}

// Object.keys(arStatuses["approved"]).length     Tells you the length of an object.


function specialObject(objectName,pidNumber,objectKey) {

    if (arSpecial[objectName][objectKey] == undefined) {
        arSpecial[objectName][objectKey] = [];
        
        arSpecial[objectName][objectKey].push(arPIDs[pidNumber]);
    }
    else {
        arSpecial[objectName][objectKey].push(arPIDs[pidNumber])
        
    }
}

function statusObject(pidOrder, image, currentStatus,currentCategoryStatus) {

    // console.log(pidOrder + "_" + image + "_" + currentStatus)
    arStatuses[currentStatus].count++
   
    if (currentStatus != "blank") {
        arStatuses['total'].count++
        if (currentCategoryStatus != "")  {
            arStatuses[currentCategoryStatus].count++
        }
    }

    if (arStatuses[currentStatus].pids.indexOf(arPIDs[pidOrder]) == -1) {
        arStatuses[currentStatus].pids.push(arPIDs[pidOrder]);
        if (currentStatus != "blank") {
        arStatuses['total'].pids.push(arPIDs[pidOrder]);
        if (currentCategoryStatus != "")  {
            arStatuses[currentCategoryStatus].pids.push(arPIDs[pidOrder]);
        }
        }
    }

}

function retoucherObject(retoucher, status, pid) {

    if (arRetouchers[retoucher] == undefined) {    //First time retoucher doesn't exist!
        arRetouchers[retoucher] = { "TOTAL": { "pids": [], "count": 0 }, "blank": { "pids": [], "count": 0 }, "approved": { "pids": [], "count": 0 }, "readyForApproval": { "pids": [], "count": 0 }, "uploaded": { "pids": [], "count": 0 }, "deleteCell": { "pids": [], "count": 0 }, "needsAmends": { "pids": [], "count": 0 }, "needsColourMatching": { "pids": [], "count": 0 }, "beingRetouched": { "pids": [], "count": 0 }, "shotTaken": { "pids": [], "count": 0 }, "needsRechecking": { "pids": [], "count": 0 }, "needsReshoot": { "pids": [], "count": 0 }, "video": { "pids": [], "count": 0 },"unclassified": { "pids": [], "count": 0 },"fileMissing": { "pids": [], "count": 0 } }
    }

    if (arRetouchers[retoucher][status].pids.indexOf(arPIDs[pid]) == -1) {
        arRetouchers[retoucher][status].pids.push(arPIDs[pid]);
        arRetouchers[retoucher][status].count++;
        arRetouchers[retoucher].TOTAL.count++;

        if (arRetouchers[retoucher].TOTAL.pids.indexOf(arPIDs[pid]) == -1) {
            arRetouchers[retoucher].TOTAL.pids.push(arPIDs[pid]);
        }
    }
    else {
        arRetouchers[retoucher][status].count++;
        arRetouchers[retoucher].TOTAL.count++;
    }
}

function photographerObject(photographer, status, pid) {

    if (arPhotographers[photographer] == undefined) {    //First time photographer doesn't exist!
        arPhotographers[photographer] = { "TOTAL": { "pids": [], "count": 0 }, "blank": { "pids": [], "count": 0 }, "approved": { "pids": [], "count": 0 }, "readyForApproval": { "pids": [], "count": 0 }, "uploaded": { "pids": [], "count": 0 }, "deleteCell": { "pids": [], "count": 0 }, "needsAmends": { "pids": [], "count": 0 }, "needsColourMatching": { "pids": [], "count": 0 }, "beingRetouched": { "pids": [], "count": 0 }, "shotTaken": { "pids": [], "count": 0 }, "needsRechecking": { "pids": [], "count": 0 }, "needsReshoot": { "pids": [], "count": 0 }, "video": { "pids": [], "count": 0 },"unclassified": { "pids": [], "count": 0 },"fileMissing": { "pids": [], "count": 0 } }
    }

    if (arPhotographers[photographer][status].pids.indexOf(arPIDs[pid]) == -1) {
        arPhotographers[photographer][status].pids.push(arPIDs[pid]);
        arPhotographers[photographer][status].count++;
        arPhotographers[photographer].TOTAL.count++;

        if (arPhotographers[photographer].TOTAL.pids.indexOf(arPIDs[pid]) == -1) {
            arPhotographers[photographer].TOTAL.pids.push(arPIDs[pid]);
        }
    }
    else {
        arPhotographers[photographer][status].count++;
        arPhotographers[photographer].TOTAL.count++;
    }
}

function removeDuplicates(arr) {
    let unique_array = []
    for (let i = 0; i < arr.length; i++) {
        if (unique_array.indexOf(arr[i]) == -1) {
            unique_array.push(arr[i])
        }
    }
    return unique_array
}

function countStatuses(array) {
    let groupCount = 0;
    let groupPids = [];
    for (let a = 0; a < array.length; a++) {
        groupCount += arStatuses[array[a]].count
        groupPids = groupPids.concat(arStatuses[array[a]].pids)
    }
    groupPids = removeDuplicates(groupPids);
    return groupCount + " (" + groupPids.length + ")";
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////// THIS SHOULD RUN ONLY ON FIRST RUN             ///////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function firstTimeRun() {
    var arr = Array.prototype.slice.call(document.getElementById('photography_worklist_details').children[0].children[2].children)    
    var shotTypeRow = arr.filter(shotType => shotType.id == "")

    for (var a = 0;a<shotTypeRow.length;a++) {
        shotTypeRow[a].style.display = "none";
    }

   var table = "<table class='data' id='staffSummaryAdmin' style='margin-bottom: 20px;' border='1'> <thead> <tr style='text-align: center;'> <th>Total Image Count</th> <th colspan='2'>Total Retouched <input class='filterButton' style='width: 60px; min-width: 60px;' value='Filter' type='button' onclick='filterLayers(totalImagesRetouched);'> </th> <th class='figures' style='background-color: rgb(175, 255, 157); color: lightgray;'></th> <th colspan='4'>To be Retouched <input class='filterButton' style='width: 60px; min-width: 60px;' value='Filter' type='button' onclick='filterLayers(imagesToBeRetouched);'> </th> <th class='figures' style='background-color: rgb(255, 191, 91);'></th> <th>Problems <input class='filterButton' style='width: 60px; min-width: 60px;' value='Filter' type='button' onclick='filterLayers(problemImages);'> </th> <th class='figures' style='background-color: rgb(255, 127, 127); color: lightgray;'></th> </tr></thead> <tbody> <tr style='text-align: center;'> <td class='figures' rowspan='2'>-</td><td style='background-color: rgb(175, 255, 157);'>Approved</td><td style='background-color: rgb(175, 255, 157);'>Ready for Approval</td><td style='background-color: rgb(175, 255, 157);'>Uploaded</td><td style='background-color: rgb(255, 191, 91);'>Needs Amends</td><td style='background-color: rgb(255, 191, 91);'>Colour Match</td><td style='background-color: rgb(255, 191, 91);'>Being Retouched</td><td style='background-color: rgb(255, 191, 91);'>Needs Rechecking</td><td style='background-color: rgb(255, 191, 91);'>Shot Taken</td><td style='background-color: rgb(255, 127, 127);'>Needs Reshoot</td><td style='background-color: rgb(255, 127, 127);'>File Missing</td></tr><tr style='text-align: center;'> <td class='figures'>-</td><td class='figures'>-</td><td class='figures'>-</td><td class='figures'>-</td><td class='figures'>-</td><td class='figures'>-</td><td class='figures'>-</td><td class='figures'>-</td><td class='figures figuresPriority'>-</td><td class='figures figuresPriority'>-</td></tr><tr style='text-align: center;'> <td> <input class='filterButton' value='Show All PIDs' onclick='filterLayers();' type='button'> </td><td style='background-color: rgb(175, 255, 157);'> <input class='filterButton' style='width: 60px; min-width: 60px;' value='Filter' type='button'> </td><td style='background-color: rgb(175, 255, 157);'> <input class='filterButton' style='width: 60px; min-width: 60px;' value='Filter' type='button'> </td><td style='background-color: rgb(175, 255, 157);'> <input class='filterButton' style='width: 60px; min-width: 60px;' value='Filter' type='button'> </td><td style='background-color: rgb(255, 191, 91);'> <input class='filterButton' style='width: 60px; min-width: 60px;' value='Filter' type='button'> </td><td style='background-color: rgb(255, 191, 91);'> <input class='filterButton' style='width: 60px; min-width: 60px;' value='Filter' type='button'> </td><td style='background-color: rgb(255, 191, 91);'> <input class='filterButton' style='width: 60px; min-width: 60px;' value='Filter' type='button'> </td><td style='background-color: rgb(255, 191, 91);'> <input class='filterButton' style='width: 60px; min-width: 60px;' value='Filter' type='button'> </td><td style='background-color: rgb(255, 191, 91);'> <input class='filterButton' style='width: 60px; min-width: 60px;' value='Filter' type='button'> </td><td style='background-color: rgb(255, 127, 127);'> <input class='filterButton' style='width: 60px; min-width: 60px;' value='Filter' type='button'> </td><td style='background-color: rgb(255, 127, 127);'> <input class='filterButton' style='width: 60px;min-width: 60px;' value='Filter' type='button'> </td></tr></tbody></table>"

   document.getElementsByClassName('navbar-inner')[0].insertAdjacentHTML('beforeend', table);


   var colorTable = "<table class='data' style='margin-bottom: 20px;' id='colourFilter' border='1'>  <tr style='text-align: center;'><td style='background-color: rgb(175, 255, 157);'>Red</td></tr><tr style='text-align: center;'> <td class='figures'>26</td></tr><tr style='text-align: center;'> <td style='background-color: rgb(175, 255, 157);'> <input class='filterButton' style='width: 60px; min-width: 60px;' value='Filter' onclick='filterLayers('approved')' type='button'> </td></tr></table>"




}

function columnsBuild() {
 
    
}


function fillInData() {
    document.getElementsByClassName('figures')[0].textContent = countStatuses(totalImagesRetouched);
    document.getElementsByClassName('figures')[1].textContent = countStatuses(imagesToBeRetouched);
    document.getElementsByClassName('figures')[2].textContent = countStatuses(problemImages);
    document.getElementsByClassName('figures')[3].textContent = arStatuses.total.count + " (" + arStatuses.total.pids.length + ")";
    document.getElementsByClassName('figures')[4].textContent = arStatuses.approved.count + " (" + arStatuses.approved.pids.length + ")";
    document.getElementsByClassName('figures')[5].textContent = arStatuses.readyForApproval.count + " (" + arStatuses.readyForApproval.pids.length + ")";
    document.getElementsByClassName('figures')[6].textContent = arStatuses.uploaded.count + " (" + arStatuses.uploaded.pids.length + ")";
    document.getElementsByClassName('figures')[7].textContent = arStatuses.needsAmends.count + " (" + arStatuses.needsAmends.pids.length + ")";
    document.getElementsByClassName('figures')[8].textContent = arStatuses.needsColourMatching.count + " (" + arStatuses.needsColourMatching.pids.length + ")";
    document.getElementsByClassName('figures')[9].textContent = arStatuses.beingRetouched.count + " (" + arStatuses.beingRetouched.pids.length + ")";
    document.getElementsByClassName('figures')[10].textContent = arStatuses.needsRechecking.count + " (" + arStatuses.needsRechecking.pids.length + ")";
    document.getElementsByClassName('figures')[11].textContent = arStatuses.shotTaken.count + " (" + arStatuses.shotTaken.pids.length + ")";
    document.getElementsByClassName('figures')[12].textContent = arStatuses.needsReshoot.count + " (" + arStatuses.needsReshoot.pids.length + ")";
    document.getElementsByClassName('figures')[13].textContent = arStatuses.fileMissing.count + " (" + arStatuses.fileMissing.pids.length + ")";

    document.getElementsByClassName('filterButton')[0].setAttribute("onClick", "filterLayers(arStatuses['totalImagesRetouched']['pids'],'totalImagesRetouched')");
    document.getElementsByClassName('filterButton')[1].setAttribute("onClick", "filterLayers(arStatuses['imagesToBeRetouched']['pids'],'imagesToBeRetouched')");
    document.getElementsByClassName('filterButton')[2].setAttribute("onClick", "filterLayers(arStatuses['problemImages']['pids'],'problemImages')");
    document.getElementsByClassName('filterButton')[4].setAttribute("onClick", "filterLayers(arStatuses['approved']['pids'],'approved')");
    document.getElementsByClassName('filterButton')[5].setAttribute("onClick", "filterLayers(arStatuses['readyForApproval']['pids'],'readyForApproval')");
    document.getElementsByClassName('filterButton')[6].setAttribute("onClick", "filterLayers(arStatuses['uploaded']['pids'],'uploaded')");
    document.getElementsByClassName('filterButton')[7].setAttribute("onClick", "filterLayers(arStatuses['needsAmends']['pids'],'needsAmends')");
    document.getElementsByClassName('filterButton')[8].setAttribute("onClick", "filterLayers(arStatuses['needsColourMatching']['pids'],'needsColourMatching')");
    document.getElementsByClassName('filterButton')[9].setAttribute("onClick", "filterLayers(arStatuses['beingRetouched']['pids'],'beingRetouched')");
    document.getElementsByClassName('filterButton')[10].setAttribute("onClick", "filterLayers(arStatuses['needsRechecking']['pids'],'needsRechecking')");
    document.getElementsByClassName('filterButton')[11].setAttribute("onClick", "filterLayers(arStatuses['shotTaken']['pids'],'shotTaken')");
    document.getElementsByClassName('filterButton')[12].setAttribute("onClick", "filterLayers(arStatuses['needsReshoot']['pids'],'needsReshoot')");
    document.getElementsByClassName('filterButton')[13].setAttribute("onClick", "filterLayers(arStatuses['fileMissing']['pids'],'fileMissing')");
    console.log(currentFilter);
}

function filterSpecial(filterObject,filterKey) {
    
}

function filterLayers(status, currentStatus) {
    currentFilter = currentStatus;
    console.log(currentFilter);
    if (status == undefined) {
        for (let a = 0; a < pidRows.length; a++) {
            pidRows[a].style.visibility = "";
        }
    }
    else if (Array.isArray(status)) {

        let tempArray = []
        for (let b = 0; b < status.length; b++) {

            tempArray = tempArray.concat(status[b])

        }
        tempArray = removeDuplicates(tempArray);

        
        // This bit could definitely be halved if coded better.
        // NEEDS TO FIX STATUSES WITH MULTIPLE CATEGORIES
        for (let a = 0; a < pidRows.length; a++) {
                pidRows[a].style.visibility = "collapse"
        }
        for (let a = 0; a < status.length; a++) {
            status[a].Location.style.visibility = ""
         }
    }
    else {
        for (let a = 0; a < pidRows.length; a++) {
            if (arStatuses[status].pids.indexOf(a) > -1 && pidRows[a].style.visibility == "") {

            }
            else if (arStatuses[status].pids.indexOf(a) > -1 && pidRows[a].style.visibility == "collapse") {
                pidRows[a].style.visibility = "";
            }
            else {
                pidRows[a].style.visibility = "collapse"
            }
        }
    }
}

function resetVariables() {
    currentHeight = window.scrollY; 
    rows = document.getElementsByTagName("tr");
    listOfPids = document.getElementsByClassName('piditem');
    pidRows = document.querySelectorAll("[id^='row_for_pc']")
    console.log(currentFilter);
    arPIDs = [];
    arStatuses = { "total": { "pids": [], "count": 0 }, "totalImagesRetouched": {"pids": [],"count":0 }, "imagesToBeRetouched": {"pids": [],"count":0 }, "problemImages": {"pids": [],"count":0 } ,"blank": { "pids": [], "count": 0 }, "approved": { "pids": [], "count": 0 }, "readyForApproval": { "pids": [], "count": 0 }, "uploaded": { "pids": [], "count": 0 }, "deleteCell": { "pids": [], "count": 0 }, "needsAmends": { "pids": [], "count": 0 }, "needsColourMatching": { "pids": [], "count": 0 }, "beingRetouched": { "pids": [], "count": 0 }, "shotTaken": { "pids": [], "count": 0 }, "needsRechecking": { "pids": [], "count": 0 }, "needsReshoot": { "pids": [], "count": 0 }, "fileMissing": { "pids": [], "count": 0 }, "video": { "pids": [], "count": 0 } , "unclassified": {"pids": [], "count": 0 } }
    arRetouchers = {};
    arPhotographers = {};
    arSpecial = {"designer":{},"category":{},"subCategory":{},"color":{} }

    var arr = Array.prototype.slice.call(document.getElementById('photography_worklist_details').children[0].children[2].children)    
    var shotTypeRow = arr.filter(shotType => shotType.id == "")

    for (var a = 0;a<shotTypeRow.length;a++) {
        shotTypeRow[a].style.display = "none";
    }

}


/*  

WORKING OUTFIT LINKS FETCH

let arPIDs = [];

let pidsToCheck = document.getElementsByClassName('piditem')

for (let i=0;i<pidsToCheck.length;i++) {

fetch("http://fulcrum.net-a-porter.com/product/json/outfit_links/" + pidsToCheck[i].textContent, {
  mode: 'no-cors',
 credentials: 'include'
}).then(response => response.json())
.then(response => {
    arPIDs.push(response.outfit_links);  
});
}

for (let a = 0;a<arPIDs.length;a++) {
arPIDs[a] = arPIDs[a].match(/\d+/g)
}

*/

/*
LOAD PRODUCT IMAGES AFTER REFRESH!!
function loadProductImages () {
    $('.product-image-post-load').each(function (index, image) {
        loadImage(image);
    });
}
*/
