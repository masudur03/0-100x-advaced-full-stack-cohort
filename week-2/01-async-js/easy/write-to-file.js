const fs = require('fs');

fs.appendFile('a.txt', 'hello world', 'utf-8', (err) => {
    //this is a async function. anything in here will execute after funining upp all the other stack below
    if (err) {
        console.log('error')
    }
    console.log('successfull');
});

for (let i = 0; i < 10000; i++) {
    console.log(i);
}