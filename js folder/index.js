// calculate 1st button.
document.getElementById('btn-calculate').addEventListener('click', function () {
    const getFootballers = getTextValue('player-number');
    const getPerPlayer = getInputValue('per-input');
    console.log('clicked')

    const playerIntoMoney = getPerPlayer * getFootballers;
    setElementTextValue('player-expanse', playerIntoMoney);
});

//calculate-total 2nd button.
document.getElementById('btn-calculate-total').addEventListener('click', function () {
    const manager = getInputValue('manager-input');
    const coach = getInputValue('coach-input');
    const lastCost = getTextValue('player-expanse')

    const finalTotal = manager + coach + lastCost;
    setElementTextValue('final-total', finalTotal)

})