console.log("Using custom js");

var notebook            = document.getElementById("site");
var header              = document.getElementById("header");
var scrollPosition      = notebook.scrollTop;
var headerHeight        = header.offsetHeight;


notebook.onscroll = function () {
    var newScrollPosition = notebook.scrollTop;
    
    // Hide
    if (scrollPosition > newScrollPosition) {
        // header.style.transform = "translateY(0)";
        // header.style.maxHeight = headerHeight + "px";
        // header.style.paddingBottom = "0";
        header.style.display = "initial";

    // Show
    } else {
        // header.style.transform = "translateY(-9999px)";
        // header.style.maxHeight = "0";
        // header.style.paddingBottom = "8";
        header.style.display = "none";
    }
    scrollPosition = newScrollPosition;
}