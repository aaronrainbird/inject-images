/*
for (var a=0;a<document.getElementsByClassName('piditem').length;a++) {
arPIDs.push(document.getElementsByClassName('piditem')[a].innerText);
}
*/

var arPIDs=[];
var comments="Test 1"

for (var a=0;a<3;a++) {
arPIDs.push(document.getElementsByClassName('piditem')[a].innerText);
}

function addComment(pid,image) {

var url = "http://fulcrum.net-a-porter.com/json/photography/add_comment";
var params = "product_id=" + pid + "&image_idx=" + image + "&multiple_comments=0&comment_type=3&comments=" + comments
var xhr = new XMLHttpRequest();
xhr.open("POST", url, true);

//Send the proper header information along with the request
xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

xhr.send(params);

}

for(var i=0;i<arPIDs.length;i++) {
   
    addComment(arPIDs[i],1)
}