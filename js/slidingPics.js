        function SlideNext(_id) {
            var slideComponent = document.getElementById(_id);
            var componentsArray = [].slice.call(slideComponent.children);
            componentsArray.push(componentsArray.shift());
            slideComponent.innerHTML = "";
            for (var i = 0; componentsArray.length > 1; i++) {
                if (i > 2) {
                    slideComponent.innerHTML += "<article class=\"col-lg-4 col-md-6 col-xs-12 d-block d-sm-none\">" +
                        componentsArray[i].innerHTML +
                        "</article>";
                } else {
                    slideComponent.innerHTML += "<article class=\"col-lg-4 col-md-6 col-xs-12\">" + componentsArray[i].innerHTML +
                        "</article>";
                }

            }
        }

        function SlideBack(_id) {
            var slideComponent = document.getElementById(_id);
            var componentsArray = [].slice.call(slideComponent.children);
            componentsArray.unshift(componentsArray.pop());
            slideComponent.innerHTML = "";
            for (var i = 0; componentsArray.length > 1; i++) {
                if (i > 2) {
                    slideComponent.innerHTML += "<article class=\"col-lg-4 col-md-6 col-xs-12 d-block d-sm-none\">" +
                        componentsArray[i].innerHTML +
                        "</article>";
                } else {
                    slideComponent.innerHTML += "<article class=\"col-lg-4 col-md-6 col-xs-12\">" + componentsArray[i].innerHTML +
                        "</article>";
                }
            }
        }

