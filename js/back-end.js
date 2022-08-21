let numb = document.getElementById("player-list").childElementCount;
console.log(numb)

document.getElementById('player-1').addEventListener('click', function () {
    getPlayerName = document.getElementById('messi-1');
    playerName = getPlayerName.innerText;
    getList = document.getElementById('list-1');
    if (numb > 0) {
        getList.innerText = playerName;
        document.getElementById("player-1").disabled = true;
        numb = numb - 1;
    }
    else {
        alert("Can not select more then 5");
    }
    console.log(numb);
})

