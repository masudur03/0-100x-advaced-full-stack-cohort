let now = new Date();
let hour = now.getHours();
let minutes = now.getMinutes();
let seconds = now.getSeconds();
let ampm = '';

if (hour > 12) {
    ampm = 'PM'
} else {
    ampm = 'AM'
}

if (hour > 12) {
    hour = hour - 12;
}


let counter = 0;

function count() {
    if (seconds >= 60) {
        seconds = 0;
        minutes += 1;
    }
    else if (minutes >= 60) {
        minutes = 0;
        hour += 1;
    }
    else if (hour >= 12) {
        hour = 0;
        if (ampm == 'PM') {
            ampm = 'AM';
        } else {
            ampm = 'PM';
        }
    }
    seconds += 1;
    //console.log(hour,":", minutes,":", seconds);
    console.log(hour, ":", minutes, ":", seconds, ampm);
}

//using the built in setInterval function for counter
setInterval(count, 1000);
