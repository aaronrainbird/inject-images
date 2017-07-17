/*
for (var a=0;a<document.getElementsByClassName('piditem').length;a++) {
arPIDs.push(document.getElementsByClassName('piditem')[a].innerText);
}
*/

var arPIDs=[];

for (var a=0;a<document.getElementsByClassName('piditem').length;a++) {
    arPIDs.push(document.getElementsByClassName('piditem')[a].innerText);
}

function addBlankCell(pid,image,label) {
    var url = "http://fulcrum.net-a-porter.com/json/photography/assign_image";
    var params = "product_id=" + pid + "&image_idx=" + image + "&image_label=" + label;
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    //Send the proper header information along with the request
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send(params);
}

for(var i=0;i<arPIDs.length;i++) {    // go through pids
    if (arPIDs[i]=="967589"||arPIDs[i]=="967590"||arPIDs[i]=="967598") {
        console.log(arPIDs[i]);
    }
    else {
        
        for(var b=1;b<11;b++) {            // go through image id
                // skip 2,6,7
            if (b==2||b==6||b==7) {
            }
            else {
                switch (b) {
                    case 1:
                        var assignLabel = 1;
                        break;
                    case 3:
                        var assignLabel = 2;
                        break;
                    case 4:
                        var assignLabel = 3;
                        break;
                    case 5:
                        var assignLabel = 6;
                        break;
                    case 8:
                        var assignLabel = 5;
                        break;
                    case 9:
                        var assignLabel = 7;
                        break;
                    case 10:
                        var assignLabel = 7;
                        break;
                }
                

                addBlankCell(arPIDs[i],b,assignLabel);
            }
                
        }
    }
}
