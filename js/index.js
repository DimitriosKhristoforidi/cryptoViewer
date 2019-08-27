fetch("https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,BCH,ETH,BSV,DASH,XMR,LTC,ZEC,BNB,&tsyms=USD,EUR,RUB&extraParams=cryptoViewer")
    .then(response => response.json()
        .then(data => {
            for (i in data.DISPLAY) {
                var cryptoList = `<div id="container"><p>${i}</p>`

                for (key in data.DISPLAY[i]) {
                    var item = `<div id="item">
                                    <p id="currencyName">${key}</p>
                                    <p id="price">${data.DISPLAY[i][key].PRICE}</p>
                                </div>`
                    cryptoList += item;
                }
                cryptoList += '</div>';
                document.getElementById('allCrypt').innerHTML += cryptoList;
            }
            console.log(data.DISPLAY);
        }))
    .catch((err) => {
        console.log('API call error:', err.message);
    });