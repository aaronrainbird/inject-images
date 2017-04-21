var arrPIDS = [];
var a = 0;
var groupedArray = [];

var noOfPages = document.getElementsByClassName('page-count')[0].innerText.substr((document.getElementsByClassName('page-count')[0].innerText.search('of')+3),5)-1;



if (window.location.href.search('outnet') > 0) {
   var noOfPages = document.getElementsByClassName('page-count')[0].innerText.substr((document.getElementsByClassName('page-count')[0].innerText.search('of')+3),5)-1;
   var imageClass = "product-image";
    var nextLink = 'next-link'
}
else if ((window.location.href.search('net-a-porter') > 0)) {
    var noOfPagesNAP = document.getElementsByClassName('pagination-links')[0].lastElementChild.text;
    var imageClass = "product-image";
    var nextLink = 'next-page'
}


    

var a = 0, howManyTimes = parseInt(noOfPages);
function f() {
  getPidsOnPage();
  console.log(arrPIDS.length);
    a++;
    if( a < howManyTimes ){
        setTimeout( f, 5000 );
    }
  
    if (a == howManyTimes) {
        groupedArr = createGroupedArray(arrPIDS, 100);    
        makeTable();
        console.log(groupedArr)
    }
}
f();

var createGroupedArray = function(arr, chunkSize) {
    var groups = [], i;
    for (var i = 0; i < arr.length; i += chunkSize) {
        groups.push(arr.slice(i, i + chunkSize));
    }
    return groups;
}

function getPidsOnPage() {
    
for(var i=0;i<document.getElementsByClassName(imageClass).length;i++) { 
    arrPIDS.push(document.getElementsByClassName(imageClass)[i].dataset.src.replace(/^.*[\\\/]/, '').slice(0,6))
    }
    document.getElementsByClassName(nextLink)[0].click();
}

function makeTable() {

var tableHTML = "<!DOCTYPE html><html><HEAD><SCRIPT>var injectArray = []; function injectImages(number) { injectArray = document.getElementsByClassName('arrays')[number].value.split(','); console.log(injectArray) } ;function confirmChecked(number) { if (document.getElementsByClassName('arrays')[number].style.backgroundColor == 'lightgreen') { document.getElementsByClassName('arrays')[number].style.backgroundColor = 'orangered'; document.getElementsByClassName('confirm')[number].innerText= 'Mark Checked';} else {    document.getElementsByClassName('arrays')[number].style.backgroundColor = 'lightgreen';  document.getElementsByClassName('confirm')[number].innerText= 'Mark Not Checked'; } } </script> <script src='https://rawgit.com/aaronrainbird/work-tools/master/ton-site-crawl-inject.js'></script></head><body><TABLE><TR>"

for(var b = 0;b<groupedArr.length;b++) {
    if (b>0 && b % 3 == 0 && b != groupedArr.length) {
        tableHTML += "</TR><TR>"
    }
    tableHTML += "<TD><textarea class='arrays' rows='25' cols='80' style='font-size:10px;background-color: orangered'>" + groupedArr[b] + "</textarea><BR><button class='confirm' onclick='confirmChecked(" + b + ")'>Mark Checked</button><button class='injectImages' onclick='injectImages(" + b + ")'>Inject Images</button> </TD>"   
    
}

    tableHTML += "</TR></body></html>"
    
var x = window.open();
x.document.open();
x.document.write(tableHTML);
x.document.close();
}

