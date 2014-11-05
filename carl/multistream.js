function setHeight() {
var height = document.getElementById('hitboxVideo').offsetWidth/16*9;
document.getElementById('hitboxVideo').style.height = height;
}
window.onload = setHeight;