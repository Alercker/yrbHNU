function getDate()
{
    var t =new Date();
    var year = t.getFullYear();
    var month = t.getMonth() + 1;
    var dat = t.getDate();
    if(month < 10)
    {
        var time = year + "-" +"0" + month + "-" + dat;
    }
    else
    {
        var time = year + "-" + month + "-" + dat;
    }
    document.getElementById("hddate").textContent = time+" "+"至"+" "+time;

    document.getElementById("spDate").textContent = time;

    document.getElementById("shDate").textContent = time + " 08:17:52";
}