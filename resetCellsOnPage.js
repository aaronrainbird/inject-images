/*
for (var a=0;a<document.getElementsByClassName('piditem').length;a++) {
arPIDs.push(document.getElementsByClassName('piditem')[a].innerText);
}
*/

// reset=15
// signedforupload=13

var arPIDs=[];

for (var a=0;a<3;a++) {
arPIDs.push(document.getElementsByClassName('piditem')[a].innerText);
}


function resetCells(pid,image) {

var url = "http://fulcrum.net-a-porter.com/json/photography/update_image_status";
var params = "product_id=" + pid + "&image_idx=" + image + "&image_status_id=15&multiple_update=";
var xhr = new XMLHttpRequest();
xhr.open("POST", url, true);

//Send the proper header information along with the request
xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

xhr.send(params);

}

function signedOffForUpload(pid,image) {

var url = "http://fulcrum.net-a-porter.com/json/photography/update_image_status";
var params = "product_id=" + pid + "&image_idx=" + image + "&image_status_id=13&multiple_update=";
var xhr = new XMLHttpRequest();
xhr.open("POST", url, true);

//Send the proper header information along with the request
xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

xhr.send(params);

}


for(var i=0;i<arPIDs.length;i++) {
    if(arPIDs[i]=="967589"||arPIDs[i]=="967590"||arPIDs[i]=="967598") {

    }
    else {
    for(var b=1;b<11;b++) {
// skip 2,6,7
if (b==2||b==6||b==7) {

}
else {
    signedOffForUpload(arPIDs[i],b)
}
}
    }

}
