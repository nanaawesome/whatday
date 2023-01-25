let form = document.getElementById("date");

form.addEventListener("submit",function(event){
    event.preventDefault();
    let day = document.getElementById("day").value;
    let month = document.getElementById("month").value;
    let year = document.getElementById("year").value;

    function dayofWeek(day,month,year){
        var k = year%100;
        var j = Math.floor(year/100);
        var x = day+((13*(month+1))/5)+k+(k/4)+(j/4)-(2*j);
        var h = Math.ceil(x%7);
        var d = ((h+5)%7)+1;
        return x;
    }
    
    let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    
    var dayText=days[dayofWeek(day,month,year)];
    console.log(typeof day);
    document.getElementById('textofDay').innerHTML=dayText;

})


