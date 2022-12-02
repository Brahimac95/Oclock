//Part Analog

let analogHour = document.getElementById('a-hour');
let analogMinute = document.getElementById('a-minute');
let analogSecond = document.getElementById('a-second')

setInterval(() => {
    let date = new Date()
    let secondDeg = date.getSeconds() * 6;
    let minuteDeg = date.getMinutes() * 6;
    let hourDeg = date.getHours() * 30;
    analogSecond.style.transform = `rotateZ(${secondDeg}deg)`;
    analogMinute.style.transform = `rotateZ(${minuteDeg}deg)`;
    analogHour.style.transform = `rotateZ(${hourDeg + (minuteDeg / 24)}deg)`;


}, 1000)


// Part digital clock
let digitalHour = document.getElementById('d-hour');
let digitalMinute = document.getElementById('d-minute');
let digitalSecond = document.getElementById('d-second');
let digitalAmPm = document.getElementById('d-ampm');

setInterval(() => {
    let date = new Date()
    let second = date.getSeconds();
    let minute = date.getMinutes()
    let hour = date.getHours();
    // let ampm = hour >= 12 ? 'PM' : 'AM'


    digitalSecond.textContent = second < 10 ? `0${second}`: second;
    digitalMinute.textContent = minute < 10 ? `0${minute}`: minute;
    digitalHour.textContent = hour % 24 < 10 ? `0${hour % 24}`: hour % 24;
    // digitalAmPm.textContent = ampm


}, 1000)