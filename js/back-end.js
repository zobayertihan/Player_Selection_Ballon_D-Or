function listCount() {
    let numb = document.getElementById("player-list").childElementCount;
    return numb;
}
function addNameToList(getElement) {
    const playerList = document.getElementById("player-list");
    getPlayerName = document.getElementById(getElement);
    playerName = getPlayerName.innerText;
    const createElementInList = document.createElement('li');
    createElementInList.appendChild(document.createTextNode(playerName));
    playerList.appendChild(createElementInList);
}

document.getElementById('player-1').addEventListener('click', function () {
    if (listCount() > 4) {
        alert("Cant");
    }
    else {
        addNameToList('messi-1');
        document.getElementById("player-1").disabled = true;
    }
})
document.getElementById('player-2').addEventListener('click', function () {
    if (listCount() > 4) {
        alert("Cant");
    }
    else {
        addNameToList('messi-2');
        document.getElementById("player-2").disabled = true;
    }
})

document.getElementById('player-3').addEventListener('click', function () {
    if (listCount() > 4) {
        alert("Cant");
    }
    else {
        addNameToList('messi-3');
        document.getElementById("player-3").disabled = true;
    }
})

document.getElementById('player-4').addEventListener('click', function () {
    if (listCount() > 4) {
        alert("Cant");
    }
    else {
        addNameToList('messi-4');
        document.getElementById("player-4").disabled = true;
    }
})

document.getElementById('player-5').addEventListener('click', function () {
    if (listCount() > 4) {
        alert("Cant");
    }
    else {
        addNameToList('messi-5');
        document.getElementById("player-5").disabled = true;
    }
})

document.getElementById('player-6').addEventListener('click', function () {
    if (listCount() > 4) {
        alert("Cant");
    }
    else {
        addNameToList('messi-6');
        document.getElementById("player-6").disabled = true;
    }
})

document.getElementById('calculate').addEventListener('click', function () {
    const val = listCount();

    const getPerPlayer = document.getElementById('per-player');
    const perPlayerString = getPerPlayer.value;
    const perPlayer = parseInt(perPlayerString);

    const getPlayerExpenses = document.getElementById('player-expenses');
    const playerExpenses = val * perPlayer;
    getPlayerExpenses.value = playerExpenses;
})