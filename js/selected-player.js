const playerArray = [];

function displayPlayer(addPlayerName) {
    // console.log(addPlayerName)

    const tableBody = document.getElementById("player-name");
    tableBody.innerHTML = "";
    for (let i = 0; i < addPlayerName.length; i++) {



        const name = playerArray[i];
        const tr = document.createElement("tr");
        tr.innerHTML = `
        <th> ${i + 1}</th>
        <td> ${name}</td>
        `;
        tableBody.appendChild(tr);


    }
    if (playerArray.length <= 5) {

        return;
    }
    else {
        alert('maximun 5 player select accept');
        return;
    }
}


// addToList (element){
//     element.disabled = true ;
//     } 

function selectPlayerButton(player) {

    // console.log(player.parentNode.parentNode.children[0].innerText)
    const playerName = player.parentNode.parentNode.children[0].innerText;
    playerArray.push(playerName);


    // console.log(playerArray.length)
    document.getElementById('total-player-selected').innerText = playerArray.length;

    if (playerArray.length <= 5) {
        player.disabled = true;

        return;
    }
    else {
        alert("You can select maximum 5 player")
        return;
    }



    displayPlayer(playerArray);


}