const mainDiv = document.getElementById('mainDiv');
mainDiv.style.display = "inline-block";
const btn = document.getElementById('button');
btn.addEventListener("click", getSquare);
function getSquare() {
    mainDiv.querySelectorAll('*').forEach( n => n.remove() );
    var a = 0;
    a = prompt("Choose number of squares per side (max.100):");
    if(a > 100) {prompt("Choose number of squares per side (max.100):")};
    makeGrid(a);
}
function makeGrid(a) {
    var b = a * a;
for(x=0; x<b; x++) {
    var div = document.createElement('div');
    //div.className = "divs";
    div.style.border = "1px solid black";
    const c = 1 / a * 100;
    div.style.width = `calc(${c}% - 2px)`;
    div.style.height = `calc(${c}% - 2px)`;
    div.style.float = "left";
    document.getElementById('mainDiv').appendChild(div);
    var divs = mainDiv.childNodes;
    divs.forEach(div => div.addEventListener('mouseover', () => div.classList.add('color')));
}
}
