/*** 
 * 
 * Only for small devices!
 * 
 * ***/

var loaded = false;

function toggle(_id, btn) {
    var slideComponent = document.getElementById(_id);
    var componentsArray = [].slice.call(slideComponent.children);
    slideComponent.innerHTML = "";

    if (!loaded) {
        loaded = true;
        for (var i = 0; componentsArray.length > 1; i++) {
            slideComponent.innerHTML += "<article class=\"col-lg-4 col-md-6 col-xs-12\">" +
                componentsArray[i].innerHTML + "</article>";
        }
    } else {
        loaded = false;
        for (var i = 0; i < 2; i++) {
            slideComponent.innerHTML += "<article class=\"col-lg-4 col-md-6 col-xs-12\">" +
                componentsArray[i].innerHTML + "</article>";
        }        
    }
}