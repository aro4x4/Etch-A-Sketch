const mainDiv = document.getElementById('mainDiv');
mainDiv.style.display = "inline-block";
for(x=0; x<256; x++) {
    var div = document.createElement('div');
    div.className = "divs";
    div.style = "background-color: antiquewhite;";
    div.style.border = "1px solid black";
    div.style.width = "calc(6.25% - 2px)";
    div.style.height = "calc(6.25% - 2px)";
    div.style.float = "left";
    document.getElementById('mainDiv').appendChild(div);
}