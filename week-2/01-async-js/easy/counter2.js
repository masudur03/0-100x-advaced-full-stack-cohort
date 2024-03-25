let counter = 0;

function count() {
    counter += 1;
    console.log("Counter: ", counter);
}

//using my own counter using setTimer async function
for (let i = 0; i < 60; i++) {
    setTimeout(count, i * 1000);
}