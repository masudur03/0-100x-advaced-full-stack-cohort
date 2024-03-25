const fs = require('fs');

fs.readFile('a.txt', 'utf-8', (err, data) => {
    //this is a async function. anything in here will execute after funining upp all the other stack below
    console.log(data);
});

for (let i = 0; i < 10000; i++) {
    console.log(i);
}