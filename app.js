var hourSp = document.getElementById("hours");
var minSp = document.getElementById("mins");
var secSp = document.getElementById("secs");
var dateSp = document.getElementById("date");
var monthSp = document.getElementById("month");
var yearSp = document.getElementById("year");

setInterval(() => {
    var time = new Date();

    if (time.getHours() < 10) {
        hourSp.innerText = "0" + time.getHours() + ":";
    } else {
        hourSp.innerText = time.getHours() + ":";
    }

    if (time.getMinutes() < 10) {
        minSp.innerText = "0" + time.getMinutes() + ": ";
    } else {
        minSp.innerText = time.getMinutes() + ": ";
    }

    if (time.getSeconds() < 10) {
        secSp.innerText = "0" + time.getSeconds();
    } else {
        secSp.innerText = time.getSeconds();
    }

    if (time.getHours() < 12) {
        secSp.innerText += " AM";
    } else {
        secSp.innerText += " PM";
    }

    if (time.getHours() === 12) {
        hourSp.innerText = "12";
    } else if (time.getHours() > 12) {
        hourSp.innerText = time.getHours() - 12 + ": ";
    }
    dateSp.innerText = time.getDate() + " -";
    monthSp.innerText = " " + (time.getMonth() + 1) + " -";
    yearSp.innerText = " " + time.getFullYear();

}, 1000);