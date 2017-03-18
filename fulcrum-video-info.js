window.scrollTo(0, 0);
clean (document.body);

    // Get list of Pids/Rows

    var rows = document.getElementsByTagName("tr");
    var pidRows = document.getElementsByClassName("pid_rows");
    var labelRows = document.getElementsByClassName("label_rows");
    var filterButtons = document.getElementsByClassName('filterButton');
    var listOfPids = document.getElementsByClassName('piditem');

    var approved = 0;
    var readyForApproval = 0;
    var uploaded = 0;
    var deleteCell = 0;
    var needsAmend = 0;
    var needsColourMatching = 0;
    var beingRetouched = 0;
    var shotTaken = 0;
    var needsRechecking = 0;
    var needsReshoot = 0;
    var fileMissing = 0;
    var blank = 0;

    nameRows();
    listInfo();


    var myName = document.getElementById('user_status').childNodes[1].innerText;
    var retouchersName = ""
    var photographersName = ""
    var arProducts = [];

    for (i=0;i<pidRows.length;i++) {
        arProducts.push({
            pidNo:document.getElementsByClassName('piditem')[i].innerText,
            Designer:document.getElementsByClassName('designer')[i].childNodes[0].textContent.trim(),
            Name:document.getElementsByClassName('product_name')[i].innerText,
            Description:document.getElementsByClassName('product_description')[i].innerText,
            Colour:document.getElementsByClassName('classification')[i].childNodes[5].textContent.trim(),
            Category:document.getElementsByClassName('classification')[i].childNodes[2].textContent.trim(),
            Subcategory:document.getElementsByClassName('classification')[i].childNodes[0].textContent.trim(),
            Season:document.getElementsByClassName('classification')[i].childNodes[8].textContent.trim(),
           // Priority:document.getElementsByClassName('product_details')[i].childNodes[4].childNodes[0].childNodes[0].innerText.trim(),
            cellsPhotographer:[],
            cellsRetoucher:[],
            cellsStatus:[]
        });

          for (var n = 0; n < 12;n++)  {
              arProducts[i].cellsPhotographer.push(
                  document.getElementsByClassName('photographer_initials_label')[n+(i*15)].title.substr(document.getElementsByClassName('photographer_initials_label')[n+(i*15)].title.indexOf(": ") + 2)
              )
              arProducts[i].cellsRetoucher.push(
                  document.getElementsByClassName('retoucher_initials_label')[n+(i*15)].title.substr(document.getElementsByClassName('retoucher_initials_label')[n+(i*15)].title.indexOf(": ") + 2)
              )
               arProducts[i].cellsStatus.push(
                  cellStatusCheck()
              )
          }
    }

var pidListInfo = "<TABLE>"

for (i=0;i<arProducts.length;i++) {
    pidListInfo += "<TR><TD>" + arProducts[i].pidNo + "</TD>" + "<TD>" + arProducts[i].Designer + "</TD>" + "<TD>" + arProducts[i].Category + "</TD>" + "<TD>" +  arProducts[i].Subcategory + "</TD>" + "<TD>" + arProducts[i].Colour + "</TD></TR>"
}

pidListInfo += "</TABLE>"

openPrompt();

/*
ALL GOOD FUNCTIONS I DONT WANT TO CHANGE
*/





function nameRows() {

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
    }



    function listInfo() {

    var pidListTitle = document.getElementsByTagName('h3')[0].innerText;      // "MRP Intl TUE 20TH SEPT UK ONLY PHOTO LIST"
    var brandList = document.getElementsByClassName('channel_logo')[0].alt;    // "MRP"
        if (brandList.search("MRP") >= 0) {
            brandList = "Mr Porter";
        } else if (brandList.search("TON") >= 0) {
            brandList = "The Outnet";
        } else {
            brandList = "Net A Porter";
        }
    }

function openPrompt() {
    var myWindow = window.open("", "MsgWindow2" + Math.random(), "width=1400,height=1000");
    myWindow.document.write(pidListInfo);
}


    function cellStatusCheck() {
                if (pidRows[i].childNodes[n+4].childNodes.length == 4) {
                    var cells = pidRows[i].childNodes[n+4].childNodes[2].childNodes[0].src.replace(/^.*[\\\/]/, '');

                    var cellBGColor = pidRows[i].childNodes[n+4].style.backgroundColor;



                   if (cells == "tick.png") {
                          approved++;
                          arProducts.push()
                           return "approved";
                    }

                    else if (cells == "picture_edit.png") {
                            readyForApproval++;
                            return "ready for approval";
                    }

                    else if (cells == "asterisk_yellow.png") {
                          uploaded++
                           return "uploaded";
                    }

                    else if (cells == "delete.png") {
                      deleteCell++
                           return "delete cell";
                    }

                     else if (cells == "pencil.png")  {
                          needsAmend++;
                          return "needs amend";
                    }

                    else if (cells == "rainbow.png") {
                          needsColourMatching++;
                          return "needs colour matching";
                    }

                    else if (cells == "color_wheel.png") {
                            beingRetouched++;
                            return "being retouched"
                    }

                    else if (cells == "picture_go.png" && cellBGColor == "rgb(255, 255, 255)") {
                          shotTaken++;
                          return "shot taken";
                    }

                    else if (cells == "picture_go.png") {
                      needsRechecking++;
                           return "needs rechecking";
                    }

                    else if (cells == "exclamation.png") {
                      needsReshoot++;
                           return "needs reshoot";
                    }

                    else if (cells == "cross.png") {
                      fileMissing++;
                           return "file missing";
                    }

            }
            else  {
              blank++;
                    return "blank";
            }

    }



 function clean(node) {
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
