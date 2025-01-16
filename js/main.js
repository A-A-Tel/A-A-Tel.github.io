// Preset functions

// function getRandomChar() {
//     const min = 32;
//     const max = 255;
//     return String.fromCharCode(Math.floor(Math.random() * (max - min + 1) + min));
// }

// Code below precisely centers all header items

function resizeHeaderItems() {

    const socials = document.getElementById("socials");
    const copyright = document.getElementById("copyright");

    const boundCopyright = copyright.getBoundingClientRect();
    const boundSocials = socials.getBoundingClientRect();

    if (boundSocials.width < boundCopyright.width) {
        socials.style.margin = "0px " + ((boundCopyright.width - boundSocials.width) / 2) + "px";
        copyright.style.margin = "0";

    } else {
        socials.style.margin = "0";
        copyright.style.margin = "0px " + ((boundSocials.width - boundCopyright.width) / 2) + "px";
    }
}

resizeHeaderItems();
window.addEventListener("resize", resizeHeaderItems);

// Random text generator

// const par = document.getElementById("par");
// const text = par.textContent;
//
// function randomText() {
//     let newText = "";
//     for (i = 0; i < text.length; i++) {
//         if (Math.random() > 0.97) {
//             newText += getRandomChar();
//         } else {
//             newText += text.charAt(i);
//         }
//     }
//     par.textContent = newText;
// }
//
// setInterval(() => {
//     randomText();
// }, 100)

