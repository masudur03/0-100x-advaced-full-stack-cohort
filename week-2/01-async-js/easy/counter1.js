let counter = 0;

function count() {
    counter += 1;
    console.log("Counter: ", counter);
}

//using the built in setInterval function for counter
setInterval(count, 1000);