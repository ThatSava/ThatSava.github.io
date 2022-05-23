//Resolve hashes to file position
window.onload = function() {
    switch (window.location.hash.substr(1)){
        case "about":
            openAboutUp();
            break;
        case "projects":
            openProjectUpDouble();
            break;
    }
};