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

        iframeDocument.addEventListener('keydown', preventScroll);
        iframeDocument.addEventListener("keydown", preventScroll);

    };
}
