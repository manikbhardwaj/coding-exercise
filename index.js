'use strict';

const fs = require('fs');

var newClicks = {};
newClicks['ip'] = [];
newClicks['timestamp'] = [];
newClicks['amount'] = [];

fs.readFile('clicks.json', (err, data) => {
    if (err) throw err;
    let clicks = JSON.parse(data);

    clicks.forEach(function (item) {
        newClicks['ip'].push(item.ip);
        newClicks['timestamp'].push(item.timestamp);
        newClicks['amount'].push(item.amount);
    });


    console.log(JSON.stringify(newClicks));

    let newData = JSON.stringify(newClicks);
    fs.writeFileSync('resultset.json', newData);
    console.log('Data is written on resultset json');

});


