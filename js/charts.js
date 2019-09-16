function getCoinHistory(coin) {
    fetch(`https://min-api.cryptocompare.com/data/v2/histohour?fsym=${coin}&tsym=USD&limit=23`)
        .then(response => response.json()
            .then(data => {
                var canvas = document.getElementById(`${coin}Chart`);
                var context = canvas.getContext('2d');
                var avg = getAVG(data.Data.Data);

                context.moveTo(0, -(data.Data.Data[0].close - avg) + 130);
                context.strokeStyle = setColor(data.Data.Data);
                context.fillStyle = setColor(data.Data.Data);
                document.getElementById(`${coin}mainCoin`).style.background = setColor(data.Data.Data);
                document.getElementById(`${coin}mainCoin`).innerHTML = `${coin} = ${data.Data.Data[23].close}`;
                context.textAlign = 'center';

                for (i in data.Data.Data) {
                    context.lineTo(i * 15, -(data.Data.Data[i].close - avg) + 130);
                    context.arc(i * 15, -(data.Data.Data[i].close - avg) + 130, 1, 0, 2 * Math.PI);
                    context.fillText(data.Data.Data[i].close, i * 15, -(data.Data.Data[i].close - avg) + 130);
                }
                context.stroke();

            })
        )
}

function getAVG(data) {
    var avg = 0;
    for (i in data) {
        avg += data[i].close;
    }
    return avg /= 24;
}

function setColor(data) {
    var style = '#1d8b3a';
    if (data[23].close < data[22].close) {
        style = '#A11B0A';
    }
    return style;
}

var btc = getCoinHistory('BTC');
var eth = getCoinHistory('ETH');
var ltc = getCoinHistory('LTC');
var dash = getCoinHistory('DASH');




