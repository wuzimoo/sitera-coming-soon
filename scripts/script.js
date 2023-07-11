let text = ["We'll be right back soon.","We'll be right back soon..","We'll be right back soon..."];
let colInx = 0;
(function changeColor(){
document.getElementsByClassName('mini_text')[0].innerHTML = text[colInx++%text.length];
setTimeout(changeColor, 1000);
})();