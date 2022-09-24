function foxgame() {
    var foxImage = document.createElement("div");

    foxImage.setAttribute("class", "foxImage");

    var fox1 = Math.floor(Math.random() * 950);
    var fox2 = Math.floor(Math.random() * 800);
    foxImage.setAttribute("style", "left:" + fox1 + "px;top:" + fox2 + "px;");

    foxImage.setAttribute("onclick", "takeFox(this)");


    document.body.appendChild(foxImage);

}

function takeFox(Element) {
    document.body.removeChild(Element);
}

function playgame() {
    setInterval(foxgame, 1000);
}