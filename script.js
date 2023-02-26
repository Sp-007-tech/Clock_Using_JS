
function displaytime()
{
    var datetime = new Date();
    var hrs = datetime.getHours();
    var min = datetime.getMinutes();
    var sec = datetime.getSeconds();
    var meridian = document.getElementById('meridian');

    if(hrs >=12)
    {
        meridian.innerHTML = "PM";
    }
    else
    {
        meridian.innerHTML = "AM";
    }

    if(hrs > 12)
    {
        hrs = hrs - 12;
    }

    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('minutes').innerHTML = min;
    document.getElementById('seconds').innerHTML = sec;
    
}

setInterval(displaytime, 10);
