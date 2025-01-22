// Map to convert class suffixes to color tokens
const colors = new Map();
colors.set('red', 'R');
colors.set('green', 'G');
colors.set('blue', 'B');
colors.set('yellow', 'Y');
colors.set('orange', 'O');
colors.set('cyan', 'C');

const codeItems = ['R', 'G', 'B', 'Y', 'O', 'C'];
const setPositions = new Array(4);
setPositions.fill(false);

let secretCode = generateCode();
let masterMindHasWon = false;

function generateCode() {
    const code = new Array(4);

    for (let i = 0; i < code.length; i++) {
        code[i] = codeItems[Math.floor(Math.random() * codeItems.length)];
    }
    return code;
}

function resetGame() {
    setPositions.fill(false);
    secretCode = generateCode();


    for (let i = 0; i < setPositions.length; i++) {
        document.getElementById('eval-' + i).className = 'pin-grey';
        document.getElementById('player-' + i).className = 'pin-grey';
        document.getElementById('select-' + i).value = 'none';
    }
    masterMindHasWon = false;
}

function winSequence() {
    for (let i = 0; i < setPositions.length; i++) {
        if (!setPositions[i]) {
            return;
        }
    }
    setPositions.fill(false);
    let score = 0;
    for (let i = 0; i < setPositions.length; i++) {

        const selectElement = document.getElementById('select-' + i);
        const evalElement = document.getElementById('eval-' + i);

        if (colors.get(selectElement.value) === secretCode[i]) {

            evalElement.className = 'pin-black';
            score++;
            setPositions[i] = true;
        } else if (secretCode.includes(colors.get(selectElement.value))) {

            evalElement.className = 'pin-white';
            selectElement.value = 'none';
        } else {

            evalElement.className = 'pin-grey';
            selectElement.value = 'none';
        }
    }
    if (score === 4) {
        masterMindHasWon = true;
        setInterval(resetGame, 5000);
    }
}

function changeColor(element) {

    if (!masterMindHasWon) {

        const id = element.id.charAt(element.id.length - 1);
        const color = element.value;

        document.getElementById('player-' + id).className = 'pin-' + color;
        setPositions[id] = true;
        winSequence();
    }

}
