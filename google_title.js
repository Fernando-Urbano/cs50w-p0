rgbJS = function (red = 0, green = 0, blue = 0) {
    return 'rgb(' + red + ', ' + green + ', ' + blue + ')';
}
document.addEventListener("DOMContentLoaded", function() {
    var googleTitle = document.querySelector(".google-title");
    var text = googleTitle.textContent;
    var coloredTitle = "";
    for (var i = 0; i < text.length; i++) {
        var letter = text.charAt(i);
        var color = "";
        if (i === 0 || i === 3 || i >= 6) {
            color = rgbJS(0, 123, 255);
        } else if (i === 1 || i === 5) {
            color = rgbJS(224, 56, 0);
        } else if (i === 2) {
            color = rgbJS(255, 230, 5);
        } else if (i === 4) {
            color = rgbJS(0, 209, 49);
        }
        coloredTitle += "<span style='color: " + color + "'>" + letter + "</span>";
    }
    googleTitle.innerHTML = coloredTitle;
});