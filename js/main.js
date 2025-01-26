// Resize the different header items to be the same - The reason for this implementation is to center the decor.
// After many struggles with CSS I figured it would be easier to use JS.
function resizeHeaderItems() {

    const socials = document.getElementById("socials");
    const copyright = document.getElementById("credit");

    const boundCopyright = copyright.getBoundingClientRect();
    const boundSocials = socials.getBoundingClientRect();

    if (boundSocials.width < boundCopyright.width) {
        socials.style.margin = "0 " + ((boundCopyright.width - boundSocials.width) / 2) + "px";
        copyright.style.margin = "0";

    } else {
        socials.style.margin = "0";
        copyright.style.margin = "0px " + ((boundSocials.width - boundCopyright.width) / 2) + "px";
    }
}

resizeHeaderItems();
window.addEventListener("resize", resizeHeaderItems);

// Prevent the scrolling whilst playing pong
const iframe = document.getElementById("pong");

function preventScroll(event) {

    if (event.key === "ArrowUp" || event.key === "ArrowDown" || event.key === "ArrowLeft" || event.key === "ArrowRight") {
        event.preventDefault();
    }
}

if (iframe !== null) {
    iframe.onload = function () {
        const iframeDocument = iframe.contentWindow.document;

        iframeDocument.addEventListener("keydown", preventScroll);
    };
}

