var title = document.getElementsByClassName('subtitle')[0].innerText
var pids = document.getElementsByClassName('piditem');
var classification = document.getElementsByClassName('classification');

for (var i = 0;i<pids.length;i++) {

}


var pidListInfo = "<H1>" + title + "</H1><TABLE style='border:1px black solid'>"

for (var i = 0;i<pids.length;i++) {
if (document.getElementsByClassName('product_details')[i].innerText.indexOf('DC1') >0 ) {
pidListInfo += "<TR style='border:1px black solid'><TD style='border:1px black solid'>" + pids[i].innerText + "</TD><TD>" + classification[i].innerText + "</TD></TR>"
}
    
}

pidListInfo += "</TABLE>"

openPrompt();


function openPrompt() {
    var myWindow = window.open("", "MsgWindow2" + Math.random(), "width=1400,height=1000");
    myWindow.document.write(pidListInfo);
}
