
const array = [];
function display(players) {
    const tableBody = document.getElementById('selected-players');
    tableBody.innerHTML = '';
    for (let i = 0; i < players.length; i++) {
        const names = array[i].name;
        const tr = document.createElement('tr');
        tr.innerHTML = `
        <td>${i + 1}</td>
        <td>${names}</td>
        `;
        tableBody.appendChild(tr);
    }
}

function addFive(element) {
    const playerName = element.parentNode.children[0].innerText;
    const playerNameObj = {
        name: playerName
    }
    array.push(playerNameObj)
    setElementTextValue('player-number', array.length);
    display(array)
}









function getInputValue(elementId) {
    const inputField = document.getElementById(elementId);
    const inputFieldString = inputField.value;
    const getInputField = parseInt(inputFieldString);
    inputField.value = '';
    return getInputField;
}
function getTextValue(textId) {
    const textValue = document.getElementById(textId);
    const textValueString = textValue.innerText
    const getTextValue = parseInt(textValueString)
    return getTextValue;
}
function setElementTextValue(elementId, newValue) {
    const setValue = document.getElementById(elementId)
    setValue.innerText = newValue;
}
