let form = document.getElementById('date');

form.addEventListener("submit",function(event){
    event.preventDefault();
    let day = document.getElementById('day').value;
    let month = document.getElementById('month').value;
    let year = document.getElementById('year').value;

    function dayofWeek(day,month,year){
        var k = year%100;
        var J = Math.floor(year/100);
        var h = Math.ceil((day + (13*(month+1)/5)+k+(k/4)+(J/4)-2*J)%7);
        var d = ((h+5)%7)+1;
        return d;
    }
    
    let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    
    var dayText=days[dayofWeek];
    console.log(document.getElementById('day').value);
    document.getElementById('textofDay').innerHTML=dayText;

})


