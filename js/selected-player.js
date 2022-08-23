// uses in utilities files function to passs player name and player button

playerName('achraf-hakimi-name', 'achraf-hakimi-select-btn');
playerName('gianluigi-name', 'gianluigi-select-btn');
playerName('juan-bernat', 'juan-bernat-select-btn');
playerName('kylian-mbappe-name', 'kylian-mbappe-select-btn');
playerName('leandro-paredes-name', 'leandro-paredes-select-btn');
playerName('marco-verratti-name', 'marco-verratti-select-btn');
playerName('marquinhos_brazil-name', 'marquinhos_brazil-select-btn');
playerName('messi-name', 'messi-select-btn');
playerName('naymer-name', 'naymer-select-btn');
playerName('ramos-name', 'ramos-select-btn');
playerName('silva-name', 'silva-select-btn');
playerName('vitinha-name', 'vitinha-select-btn');

// calculate the per player expense  
document.getElementById('calculate').addEventListener('click', function () {

    const perPlayerExpenseInputField = document.getElementById('per-player');

    console.log(perPlayerExpenseInputField.value);




    // per player expense input field validation 
    if (perPlayerExpenseInputField.value == '' || perPlayerExpenseInputField.value < 0) {
        alert('Invalid Amount/Type');
        perPlayerExpenseInputField.value = '';
        return;
    }


    // find the number of players added in the list and calculate expense for them
    let orderderList = document.querySelectorAll("li");
    let order = parseInt(orderderList.length);


    const playerExpenseShown = document.getElementById('palyer-expenses');
    const perPlayerExpense = parseFloat(perPlayerExpenseInputField.value);
    const playerExpense = perPlayerExpense * (order - 5);


    playerExpenseShown.innerText = parseFloat(playerExpense.toFixed('2'));


})

// total amount  calculation

document.getElementById('calculate-total').addEventListener('click', function () {

    const playerExpenses = document.getElementById('palyer-expenses');
    const managerExpenses = document.getElementById('manager');
    const coachExpenses = document.getElementById('coach');

    const totalCost = document.getElementById('total');



    // validation for manager,coach input field and calculate the total expense
    if (playerExpenses.innerText == '' || managerExpenses.value == '' || managerExpenses.value < 0 || coachExpenses.value == '' || coachExpenses.value < 0) {
        alert('invalid Amount/Type');
        managerExpenses.value = '';
        coachExpenses.value = '';
        return;
    }

    const total = parseFloat(playerExpenses.innerText) + parseFloat(managerExpenses.value) + parseFloat(coachExpenses.value);

    totalCost.innerText = parseFloat(total);
})