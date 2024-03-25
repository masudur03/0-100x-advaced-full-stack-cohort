/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */
function wait1(t) {
    let p = new Promise(function (resolve) {
        setTimeout(resolve, t);
    });
    return p;
}

function wait2(t) {
    let p = new Promise(function (resolve) {
        setTimeout(resolve, t);
    });
    return p;
}

function wait3(t) {
    let p = new Promise(function (resolve) {
        setTimeout(resolve, t);
    });
    return p;
}

async function calculateTime(t1, t2, t3) {
    let start = Date.now();
    await Promise.all([wait1(t1 * 1000), wait2(t2 * 1000), wait3(t3 * 1000)]);
    let totalTime = Date.now() - start;
    return totalTime;
}

//calculateTime(10, 1, 1);



module.exports = calculateTime;
