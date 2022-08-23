// find using function  name and disable buttons after selecting . 

function playerName(playerNameId, playerButton) {

    document.getElementById(playerButton).addEventListener('click', function () {
        const nameShown = document.getElementById(playerNameId);
        const name = nameShown.innerText;


        const node = document.createElement("li");
        const textnode = document.createTextNode(name);
        node.appendChild(textnode);


        const list = document.getElementById('ordered-list');
        list.appendChild(node);

        const disableButton = document.getElementById(playerButton);
        disableButton.disabled = true;


        disableButton.style.background = 'red';
        disableButton.style.color = 'white';


        // Look after number of listed elements
        let orderderList = document.querySelectorAll("li");
        let order = parseInt(orderderList.length);



        // by default 5 listed previously that's why  length considered 10 

        if (order > 10) {
            alert('Maximum select 5 playes');
            disableButton.disabled = false;
            disableButton.style.background = 'blue';
            disableButton.style.color = 'white';
            list.removeChild(node);
            return;
        }
    })
}