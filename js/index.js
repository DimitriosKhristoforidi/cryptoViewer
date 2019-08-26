fetch("https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC&tsyms=USD,EUR,RUB&extraParams=cryptoViewer")
    .then(response => response.json()
        .then(data => {
            for(key in data.DISPLAY.BTC){
                var item = `<div id="item"><p id="currencyName">${key}</p><p id="price">${data.DISPLAY.BTC[key].PRICE}</p></div>`
                document.getElementById('container').innerHTML += item;
            }
            console.log(data.DISPLAY.BTC.USD);
        }))
    .catch((err) => {
        console.log('API call error:', err.message);
    });