//1st-btn
document.getElementById('btn-calculate').addEventListener('click', function () {
    const getFootballers = getTextValue('player-number');
    const getPerPlayer = getInputValue('per-input');

    const playerIntoMoney = getPerPlayer * getFootballers;
    setElementTextValue('player-expanse', playerIntoMoney);

    if (isNaN(getPerPlayer)) {
        alert('Give a number.')
    }

});

//calculate-total 2nd button.
document.getElementById('btn-calculate-total').addEventListener('click', function () {
    const manager = getInputValue('manager-input');
    const coach = getInputValue('coach-input');
    const lastCost = getTextValue('player-expanse')

    const finalTotal = manager + coach + lastCost;
    setElementTextValue('final-total', finalTotal);

    if (isNaN(manager && coach)) {
        alert('Give A Number.')
    }

})