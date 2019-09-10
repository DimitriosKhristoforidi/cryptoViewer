window.onload = () => {
    getCoinList();
}


async function getCoinList() {
    await fetch('https://min-api.cryptocompare.com/data/all/coinlist')
        .then(response => response.json()
            .then(data => {
                document.getElementById("dropdownSelectors").innerHTML = '';
                initializeDropdown(data, 'firstCoin');
                document.getElementById("dropdownSelectors").innerHTML += '<div id="equal">=</div>';
                initializeDropdown(data, 'secondCoin');
            }))
}

function initializeDropdown(list, name) {
    let dropdownContent = `<select id="dropdown" name="${name}">`;
    for (let key in list.Data) {
        dropdownContent += `<option value="${list.Data[key].Name}">${list.Data[key].Name}</option>`
    }    
    dropdownContent += '</select>'
    document.getElementById("dropdownSelectors").innerHTML += dropdownContent;
}

async function convertValue(convertingValue, fromCoin, toCoin, outPanelId) {
    let result;
    let post = `https://min-api.cryptocompare.com/data/price?fsym=${fromCoin}&tsyms=${toCoin}`;
    await fetch(post)
        .then(response => response.json()
            .then(data => {
                result = data[toCoin] * convertingValue;
            }))
    
    document.getElementById(outPanelId).value = result;
}
