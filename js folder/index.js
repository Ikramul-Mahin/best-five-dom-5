// calculate 1st button.
document.getElementById('btn-calculate').addEventListener('click', function () {
    const perPlayer = getInputValue('per-input');
    const totalExpanse = getTextValue('player-expanse');

    const remainExpanse = perPlayer * fivePlayer;
    setElementTextValue('per-input', remainExpanse);

});

//calculate-total 2nd button.
document.getElementById('btn-calculate-total').addEventListener('click', function () {
    const manager = getInputValue('manager-input');
    const coach = getInputValue('coach-input');
    const lastTotal = getTextValue('final-total')



})