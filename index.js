let day = document.getElementById('day').value;
let month = document.getElementById('month').value;
let year = document.getElementById('year').value;

function dayofWeek(day,month,year){
    k = year%100;
    J = Math.floor(year/100);
    h = Math.ceil((day + (13*(month+1)/5)+k+(k/4)+(J/4)-2*J)%7);
    return d = ((h+5)%7)+1;
}

let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

var dayText=days[dayofWeek];
console.log(dayText);
document.getElementById('textofDay').innerHTML=dayText;