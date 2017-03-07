var t = null;
function time(){
 dt = new Date();
 var y=dt.getFullYear();
 var h=dt.getHours();
 var m=dt.getMinutes();
 var s=dt.getSeconds();
 document.getElementById("timeShow").innerHTML=y+"."+""+""+h+":"+m+":"+s;
 t = setTimeout(time,1000);    
} 
window.onload=function(){time()}

