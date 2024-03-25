const fs = require('fs');
fs.readFile('a.txt', 'utf-8', (err, data) => {
    //read all the data into a string
    data = data.replace(/\s+/g, ' ').trim();
    console.log(data);

    //then write back into the file
    fs.writeFile('a.txt', data, 'utf-8', (err) => {
        console.log("successful");
    })
});

//console.log(a);