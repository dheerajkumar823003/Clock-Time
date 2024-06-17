let hr = document.getElementById('hour');
let min = document.getElementById('min');
let sec = document.getElementById('sec');

function displayTime(){
    let date = new Date();

    //Getting hour, min, second, from date
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.setSeconds();

    let hRotation = 30*hh + mm/2;
    let mRotation = 6*mm;
    let sRotation = 6*ss;

    hr.style.transform = 'rotate(${hRotaion}deg)';
    min.style.transform = 'rotate(${mRotaion}deg)';
    sec.style.transform = 'rotate(${sRotaion}deg)';

}

setInterval(displayTime, 1000);