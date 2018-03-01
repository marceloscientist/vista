function carregarMais(_id) {
    var slideComponent = document.getElementById(_id);
    var componentsArray = [].slice.call(slideComponent.children);
    slideComponent.innerHTML = "";
    for (var i = 0; componentsArray.length > 1; i++) {
        slideComponent.innerHTML += "<article class=\"col-lg-4 col-md-6 col-xs-12\">" +
            componentsArray[i].innerHTML +
            "</article>";
    }
    document.getElementById("carregar-mais").className = "d-none";
}