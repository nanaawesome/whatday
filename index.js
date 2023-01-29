let form = document.getElementById("date");

form.addEventListener("submit",function(event){
    event.preventDefault();
    let day = parseInt(document.getElementById("day").value);
    let month = parseInt(document.getElementById("month").value);
    let year = parseInt(document.getElementById("year").value);
    
    if (month == 1)
    {
        month = 13;
        year--;
    }
    if (month == 2)
    {
        month = 14;
        year--;
    }
    function dayofWeek(day,month,year){
        var k = year%100;
        var j = Math.floor(year/100);
        var x = day + parseInt(13 * (month + 1) / 5, 10) + k + parseInt(k / 4, 10) + parseInt(j / 4, 10) + 5 * j;
        var h = x%7;
        return h;
    }
    
    let days = ["Saturday","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday"];
    
    var dayText=days[dayofWeek(day,month,year)];
    console.log(dayText);
    document.getElementById('textofDay').innerHTML=dayText;

})


