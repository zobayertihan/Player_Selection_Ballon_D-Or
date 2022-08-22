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

function getElementValue(elementId) {
    const getPerPlayer = document.getElementById(elementId);
    const perPlayerString = getPerPlayer.value;
    const perPlayer = parseInt(perPlayerString);
    return perPlayer
}

document.getElementById('player-1').addEventListener('click', function () {
    if (listCount() > 4) {
        alert("Cant add more then Five Players");
    }
    else {
        addNameToList('benzema');
        document.getElementById("player-1").disabled = true;
    }
})
document.getElementById('player-2').addEventListener('click', function () {
    if (listCount() > 4) {
        alert("Cant add more then Five Players");
    }
    else {
        addNameToList('courtois');
        document.getElementById("player-2").disabled = true;
    }
})

document.getElementById('player-3').addEventListener('click', function () {
    if (listCount() > 4) {
        alert("Cant add more then Five Players");
    }
    else {
        addNameToList('ronaldo');
        document.getElementById("player-3").disabled = true;
    }
})

document.getElementById('player-4').addEventListener('click', function () {
    if (listCount() > 4) {
        alert("Cant add more then Five Players");
    }
    else {
        addNameToList('casemiro');
        document.getElementById("player-4").disabled = true;
    }
})

document.getElementById('player-5').addEventListener('click', function () {
    if (listCount() > 4) {
        alert("Cant add more then Five Players");
    }
    else {
        addNameToList('modric');
        document.getElementById("player-5").disabled = true;
    }
})

document.getElementById('player-6').addEventListener('click', function () {
    if (listCount() > 4) {
        alert("Cant add more then Five Players");
    }
    else {
        addNameToList('vini');
        document.getElementById("player-6").disabled = true;
    }
})

document.getElementById('player-7').addEventListener('click', function () {
    if (listCount() > 4) {
        alert("Cant add more then Five Players");
    }
    else {
        addNameToList('rudiger');
        document.getElementById("player-7").disabled = true;
    }
})

document.getElementById('player-8').addEventListener('click', function () {
    if (listCount() > 4) {
        alert("Cant add more then Five Players");
    }
    else {
        addNameToList('kevin');
        document.getElementById("player-8").disabled = true;
    }
})

document.getElementById('player-9').addEventListener('click', function () {
    if (listCount() > 4) {
        alert("Cant add more then Five Players");
    }
    else {
        addNameToList('son');
        document.getElementById("player-9").disabled = true;
    }
})


document.getElementById('calculate').addEventListener('click', function () {
    const val = listCount();
    let perPlayer = getElementValue('per-player');
    if (isNaN(perPlayer)) {
        alert('Please Enter a Number');
        return;
    }
    const getPlayerExpenses = document.getElementById('player-expenses');
    const playerExpenses = val * perPlayer;
    getPlayerExpenses.value = playerExpenses;
})

document.getElementById('total-calculate').addEventListener('click', function () {
    const val = listCount();
    let perPlayer = getElementValue('per-player');
    let manager = getElementValue('manager');
    let coach = getElementValue('coach');
    if (isNaN(manager && coach)) {
        alert('Please Enter a Number');
        return;
    }
    const playerExpenses = val * perPlayer;
    const totalExpenses = playerExpenses + manager + coach;
    const getTotalExpeses = document.getElementById('total-expenses')
    getTotalExpeses.value = totalExpenses;

})