const menuToggle = document.querySelector(".menu-toggle")
const nav = document.querySelector(".menu__navbar")

menuToggle.addEventListener("click", () => {
    nav.classList.toggle("menu__navbar--visible")
})

function updateDeeg(_variant){
    document.getElementById("img-dough").src="links/"+_variant+".png";
}

function updateGlazuur(_variant){
    document.getElementById("img-glaze").src="links/"+_variant+".png";
}

function updateTopping(_variant){
    document.getElementById("img-topping").src="links/"+_variant+".png";
}