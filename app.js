let button = document.querySelector(".theme-btn");
let themeLayer = document.querySelector(".theme-layer");
let textElements = document.querySelectorAll("h1");

const themify = (event) => {
    if ( themeLayer.style.scale != "1" ) {
        
        themeLayer.style.scale = "1";
        event.target.style.backgroundColor = "antiquewhite";

        setTimeout( () => {
            for(let i=0; i < textElements.length; i++ ) {
                textElements[i].style.color = "#5D4C80";
            }
        }, 450);
    } else {
        
        themeLayer.style.scale = "500";

        setTimeout( () => {
            for(let i=0; i < textElements.length; i++ ) {
                textElements[i].style.color = "#9D9F57";
            }
        }, 150);
    }
}

button.addEventListener("click", themify)