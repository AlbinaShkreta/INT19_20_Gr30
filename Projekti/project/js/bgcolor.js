var i=0;

function divchange()
{
var divtag=document.getElementById("div1");
var bgcolor= ["purple","yellow","blue","green"];
divtag.style.backgroundColor=bgcolor[i];
i = (i+1)%bgcolor.length;
}

setInterval(divchange,2000);
