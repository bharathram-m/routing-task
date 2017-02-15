var btn = document.getElementById("btnn");

var animal = document.getElementById("animaldiv");
function func()
{ 
    var ourreq = new XMLHttpRequest();
    ourreq.open('GET',"http://www.omdbapi.com/?t=taxi&y=1990&plot=short&r=json");
    ourreq.onload=function()
    {
        var ourdata=JSON.parse(ourreq.responseText);
       console.log(ourdata);
       //rendr(ourdata);
       
    };
    ourreq.send();
    chck();
}
function chck()
{
    alert("checked");
}
function rendr(data)
{
    animal.innerHTML('hai','dai');
}