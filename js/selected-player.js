
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

// calculate the expense for per player
document.getElementById('calculate').addEventListener('click', function () {

    const perPlayerExpenseInputField = document.getElementById('per-player');

    console.log(perPlayerExpenseInputField.value);

    // validation of per player expense input field
    if (perPlayerExpenseInputField.value == '' || perPlayerExpenseInputField.value < 0) {
        alert('Invalid Amount/Type');
        perPlayerExpenseInputField.value = '';
        return;
    }


})