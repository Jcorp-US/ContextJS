///////////////////////////////////
// CONTEXTJS                     //
// (C) 2019 Platform LMS (Jcorp) //
// MIT License                   //
///////////////////////////////////

if (document.addEventListener) { 
    document.addEventListener('contextmenu', function(e) {
        createContextMenu(e.pageX, e.pageY); 
        e.preventDefault();
    }, false);
} else { 
    document.attachEvent('oncontextmenu', function(e) {
        createContextMenu(e.clientX, e.clientY); 
        window.event.returnValue = false;
    });
}


function createContextMenu(x,y){
    document.getElementById("context").style.display = "block";
    document.getElementById("context").style.top = y+"px";
    document.getElementById("context").style.left = x+"px";
    window.onclick = function() { document.getElementById("context").style.display = "none"; console.log("Clicks"); window.onclick=null; }
}
