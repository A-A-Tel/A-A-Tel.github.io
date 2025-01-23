// Resize the different header items dynamically
function resizeHeaderItems() {

    const socials = document.getElementById("socials");
    const copyright = document.getElementById("copyright");

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

// Prevent the scrolling whilst playing pong
const iframe = document.getElementById("pong");

function preventScroll(event) {

    if (event.key === 'ArrowUp' || event.key === 'ArrowDown' || event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
        event.preventDefault();
    }
}

iframe.onload = function () {
    const iframeDocument = iframe.contentWindow.document;

    iframeDocument.addEventListener('keydown', preventScroll);
};

resizeHeaderItems();
window.addEventListener("resize", resizeHeaderItems);
