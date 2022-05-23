/**
 * Created by Sava on 28.8.2016..
 */
var animation;

//ABOUT
//About up animation
function openAboutUp() {
    document.getElementById("intro").classList.toggle("fadeUp");
    animation = setInterval(openAboutAnimationUp, 500);
}
function openAboutAnimationUp() {
    clearInterval(animation);
    document.getElementById("intro").style.marginTop = -2*document.getElementById("intro").clientHeight+"px";
    resetAboutAnimation();
}

//About down animation
function openAboutDown() {
    document.getElementById("intro").classList.toggle("fadeDown2");
    animation = setInterval(openAboutAnimationDown, 500);
}
function openAboutAnimationDown() {
    clearInterval(animation);
    document.getElementById("intro").style.marginTop = -2*document.getElementById("intro").clientHeight+"px";
    resetAboutAnimation();
}


//PROJECTS
//Projects double up animation
function openProjectUpDouble() {
    document.getElementById("intro").classList.toggle("fadeUpDouble");
    animation = setInterval(openProjectAnimationUpDouble, 1000);
}
function openProjectAnimationUpDouble() {
    clearInterval(animation);
    document.getElementById("intro").style.marginTop = -3*document.getElementById("intro").clientHeight+"px";
    resetAboutAnimation();
}
//Projects up animation
function openProjectUp() {
    document.getElementById("intro").classList.toggle("fadeUp2");
    animation = setInterval(openProjectAnimationUp, 500);
}
function openProjectAnimationUp() {
    clearInterval(animation);
    document.getElementById("intro").style.marginTop = -3*document.getElementById("intro").clientHeight+"px";
    resetAboutAnimation();
}




//HOME
//Home down animation
function openHomeDown() {
    document.getElementById("intro").classList.toggle("fadeDown");
    animation = setInterval(openHomeAnimationDown, 500);
}
function openHomeAnimationDown() {
    clearInterval(animation);
    document.getElementById("intro").style.marginTop = 0;
    resetAboutAnimation();
}
//Home double down animation
function openHomeDownDouble() {
    document.getElementById("intro").classList.toggle("fadeDownDouble");
    animation = setInterval(openHomeAnimationDownDouble, 1000);
}
function openHomeAnimationDownDouble() {
    clearInterval(animation);
    document.getElementById("intro").style.marginTop = 0;
    resetAboutAnimation();
}


//GENERAL
function resetAboutAnimation() {
    clearInterval(animation);
    document.getElementById("intro").classList.remove("fadeUp");
    document.getElementById("intro").classList.remove("fadeDown");
    document.getElementById("intro").classList.remove("fadeUpDouble");
    document.getElementById("intro").classList.remove("fadeDownDouble");
    document.getElementById("intro").classList.remove("fadeUp2");
    document.getElementById("intro").classList.remove("fadeDown2");
}